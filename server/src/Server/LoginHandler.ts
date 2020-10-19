import { throws } from "assert";
import { IncomingMessage, ServerResponse } from "http";
import { TokenGenerator } from "../Authorization/Model";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
import BaseRequestHandler from "./BaseRequestHandler";
import { LoginInformation } from "./Model";

/* 
  This class handles anything related to a user wanting to login.
  This includes:
  - Handling POST request for login
  - Gets data from the request body
  - Invokes tokenGenerator from another class
*/

class LoginHandler extends BaseRequestHandler {
  private tokenGenerator: TokenGenerator;

  public constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenGenerator: TokenGenerator
  ) {
    super(req, res);
    this.tokenGenerator = tokenGenerator;
  }

  // This method handles different types of requests
  public async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.POST:
        await this.loginUser();
        break;
      case HTTP_METHODS.OPTIONS:
        this.res.writeHead(HTTP_CODES.OK);
      default:
        this.handleNotFound("Method not found!");
        break;
    }
  }

  private async loginUser(): Promise<void> {
    try {
      const reqBody = await this.getRequestBody();

      if (reqBody.username && reqBody.password) {
        const sessionToken = await this.tokenGenerator.generateToken(reqBody);

        if (sessionToken) {
          this.respondWithJSON(HTTP_CODES.OK, sessionToken);
        } else {
          this.res.write("Incorrect creds, bruh.");
        }
      }
    } catch (error) {
      this.handleBadRequest(error.message);
    }
  }
}

export default LoginHandler;
