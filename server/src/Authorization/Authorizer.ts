import { LoginInformation } from "../Server/Model";
import { TokenGenerator, SessionToken } from "./Model";
import TokenDbAccess from "./TokenDbAccess";
import UserDbAccess from "./UserDbAccess";

class Authorizer implements TokenGenerator {
  private userDbAccess: UserDbAccess = new UserDbAccess();
  private tokenDbAccess: TokenDbAccess = new TokenDbAccess();

  public async generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined> {
    // 1. Verify credentials in DB
    const validUser = await this.userDbAccess.checkUserInDB(
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
  private generateExpirationTime(): Date {
    return new Date(Date.now() + 60 * 60 * 1000);
  }

  private generateRandomTokenId(): string {
    return Math.random().toString(36).slice(2);
  }
}

export default Authorizer;
