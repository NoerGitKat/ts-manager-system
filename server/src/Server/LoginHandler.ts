import { IncomingMessage, ServerResponse } from "http";
import { TokenGenerator } from "../Authorization/Model";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
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
    switch (this.req.method) {
      case HTTP_METHODS.POST:
        await this.handlePostRequest();
        break;
      default:
        this.res.write("Method not found!");
        break;
    }
  }

  private async handlePostRequest() {
    try {
      const reqBody = await this.getRequestBody();

      if (reqBody.username && reqBody.password) {
        const sessionToken = await this.tokenGenerator.generateToken(reqBody);

        if (sessionToken) {
          this.res.statusCode = HTTP_CODES.OK;
          this.res.writeHead(HTTP_CODES.OK, {
            "Content-Type": "application/json",
          });
          this.res.write(JSON.stringify(sessionToken));
        } else {
          this.res.write("Incorrect creds, bruh.");
        }
      }
    } catch (error) {
      this.res.statusCode = HTTP_CODES.BAD_REQUEST;
      this.res.writeHead(HTTP_CODES.BAD_REQUEST);
      this.res.write(`Something went wrong: ${error.message}`);
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
