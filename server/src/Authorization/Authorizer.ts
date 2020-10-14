import { LoginInformation } from "../Server/Model";
import { TokenGenerator, SessionToken } from "./Model";
import TokenDbAccess from "./TokenDbAccess";
import CredsDbAccess from "./CredsDbAccess";
import {
  TokenPrivileges,
  TokenState,
  TokenValidator,
} from "../Authentication/Model";

class Authorizer implements TokenGenerator, TokenValidator {
  private credsDbAccess: CredsDbAccess = new CredsDbAccess();
  private tokenDbAccess: TokenDbAccess = new TokenDbAccess();

  public async generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined> {
    // 1. Verify credentials in DB
    const validUser = await this.credsDbAccess.checkUserInDB(
      credentials.username,
      credentials.password
    );

    if (validUser) {
      // 2. Create token
      const sessionToken = {
        privileges: validUser.privileges,
        expirationTime: this.generateExpirationTime(),
        username: validUser.username,
        isValid: true,
        tokenId: this.generateRandomTokenId(),
      };

      // 3. Store token in token DB
      await this.tokenDbAccess.storeTokenInDB(sessionToken);

      // 4. Return token
      return sessionToken;
    } else {
      return undefined;
    }
  }

  public async validateToken(tokenId: string): Promise<TokenPrivileges> {
    const token = await this.tokenDbAccess.checkTokenInDB(tokenId);
    if (!token || !token.isValid) {
      return {
        privileges: [],
        state: TokenState.INVALID,
      };
    } else if (token.expirationTime < new Date()) {
      return {
        privileges: [],
        state: TokenState.EXPIRED,
      };
    } else {
      return {
        privileges: token.privileges,
        state: TokenState.VALID,
      };
    }
  }

  private generateExpirationTime(): Date {
    return new Date(Date.now() + 60 * 60 * 1000);
  }

  private generateRandomTokenId(): string {
    return Math.random().toString(36).slice(2);
  }
}

export default Authorizer;
