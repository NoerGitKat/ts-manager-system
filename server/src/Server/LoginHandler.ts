import { IncomingMessage, ServerResponse } from "http";
import { TokenGenerator } from "../Authorization/Model";
import { LoginInformation, RequestHandler } from "./Model";

/* 
  This class handles anything related to a user wanting to login.
  This includes:
  - Handling POST request for login
  - Gets data from the request body
  - Invokes tokenGenerator from another class
*/

class LoginHandler implements RequestHandler {
  private req: IncomingMessage;
  private res: ServerResponse;
  private tokenGenerator: TokenGenerator;

  public constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenGenerator: TokenGenerator
  ) {
    this.req = req;
    this.res = res;
    this.tokenGenerator = tokenGenerator;
  }

  // This method handles different types of requests
  public async handleRequest(): Promise<void> {
    try {
      const reqBody = await this.getRequestBody();

      if (reqBody.username && reqBody.password) {
        const sessionToken = await this.tokenGenerator.generateToken(reqBody);

        if (sessionToken) {
          this.res.write(`Your creds are valid! ${sessionToken.tokenId}`);
        } else {
          this.res.write("Incorrect creds, bruh.");
        }
      }
    } catch (error) {
      // Send bad request response to client
    }
  }

  private async getRequestBody(): Promise<LoginInformation> {
    return new Promise((resolve, reject) => {
      let reqBody = "";

      this.req.on("data", (data: string) => {
        reqBody += data;
      });

      this.req.on("end", () => {
        try {
          const parsedBody = JSON.parse(reqBody);
          resolve(parsedBody);
        } catch (error) {
          reject(error);
        }
      });

      this.req.on("error", (error: any) => {
        reject(error);
      });
    });
  }
}

export default LoginHandler;
