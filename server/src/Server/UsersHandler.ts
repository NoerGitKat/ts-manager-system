import { IncomingMessage, ServerResponse } from "http";
import { User } from "../Authentication/Model";
import { HTTP_METHODS } from "../Shared/Model";
import BaseRequestHandler from "./BaseRequestHandler";
import Utils from "./Utils";

class UsersHandler extends BaseRequestHandler {
  public constructor(req: IncomingMessage, res: ServerResponse) {
    super(req, res);
  }

  public async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.getOneUser();
        break;
      case HTTP_METHODS.POST:
        break;
      default:
        this.handleNotFound();
        break;
    }
  }

  private async getOneUser(): Promise<User | undefined> {
    const parsedUrl = Utils.getQueryParams(this.req.url);

    if (parsedUrl) {
      // Get user from db
    }

    return undefined;
  }
}

export default UsersHandler;
