import { LoginInformation } from "../Server/Model";
import { Privilege } from "../Shared/Model";

interface SessionToken {
  tokenId: string;
  username: string;
  isValid: Boolean;
  expirationTime: Date;
  privileges: Privilege[];
}

interface TokenGenerator {
  generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined>;
}

export { SessionToken, TokenGenerator };
