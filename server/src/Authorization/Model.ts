import { LoginInformation } from "../Server/Model";

interface SessionToken {
  tokenId: string;
}

interface TokenGenerator {
  generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined>;
}

export { SessionToken, TokenGenerator };
