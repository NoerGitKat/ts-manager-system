import { IncomingMessage, ServerResponse } from "http";
import { LoginInformation, RequestHandler } from "./Model";

class LoginHandler implements RequestHandler {
  private req: IncomingMessage;
  private res: ServerResponse;

  public constructor(req: IncomingMessage, res: ServerResponse) {
    this.req = req;
    this.res = res;
  }

  // This method handles different types of requests
  public async handleRequest(): Promise<void> {
    const reqBody = await this.getRequestBody();
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
