import { IncomingMessage, ServerResponse } from "http";
import { User } from "../Authentication/Model";
import { HTTP_CODES } from "../Shared/Model";
import { LoginInformation } from "./Model";

abstract class BaseRequestHandler {
  protected req: IncomingMessage;
  protected res: ServerResponse;

  public constructor(req: IncomingMessage, res: ServerResponse) {
    this.req = req;
    this.res = res;
  }

  abstract async handleRequest(): Promise<void>;

  public handleNotFound(message: string): void {
    this.res.statusCode = HTTP_CODES.NOT_FOUND;
    this.res.write(message);
  }

  public handleBadRequest(message: string): void {
    this.res.statusCode = HTTP_CODES.BAD_REQUEST;
    this.res.writeHead(HTTP_CODES.BAD_REQUEST);
    this.res.write(`Something went wrong: ${message}`);
  }

  public handleUnAuthorizedRequest(message: string): void {
    this.res.statusCode = HTTP_CODES.UNAUTHORIZED;
    this.res.writeHead(HTTP_CODES.UNAUTHORIZED);
    this.res.write(`Something went wrong: ${message}`);
  }

  public handleServerError(message: string): void {
    this.res.statusCode = HTTP_CODES.SERVER_ERROR;
    this.res.writeHead(HTTP_CODES.SERVER_ERROR);
    this.res.write(`Something went wrong: ${message}`);
  }

  public respondWithJSON(code: HTTP_CODES, object: any) {
    this.res.statusCode = code;
    this.res.writeHead(code, {
      "Content-Type": "application/json",
    });
    this.res.write(JSON.stringify(object));
  }

  protected async getRequestBody(): Promise<any> {
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

export default BaseRequestHandler;
