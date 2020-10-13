import { LoginInformation } from "../Server/Model";
import { TokenGenerator, SessionToken } from "./Model";

class Authorizer implements TokenGenerator {
  public async generateToken(
    credentials: LoginInformation
  ): Promise<SessionToken | undefined> {
    // 1. Verify credentials in DB
    if (credentials.username === "abc" && credentials.password == "123") {
      // 2. If valid, create random string as token

      // 3. Return token
      return {
        tokenId: "asjkd123",
      };
    } else {
      return undefined;
    }
  }
}

export default Authorizer;
