import { IncomingMessage, ServerResponse } from "http";
import { User } from "../Authentication/Model";
import UsersDbAccess from "../Authentication/UsersDbAccess";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
import BaseRequestHandler from "./BaseRequestHandler";
import Utils from "./Utils";

class UsersHandler extends BaseRequestHandler {
  private userDbAccess: UsersDbAccess;

  public constructor(req: IncomingMessage, res: ServerResponse) {
    super(req, res);
    this.userDbAccess = new UsersDbAccess();
  }

  public async handleRequest(): Promise<void> {
    switch (this.req.method) {
      case HTTP_METHODS.GET:
        await this.getOneUser();
        break;
      case HTTP_METHODS.POST:
        break;
      default:
        this.handleNotFound("Method not found!");
        break;
    }
  }

  private async getOneUser(): Promise<User | undefined> {
    const parsedUrl = Utils.getQueryParams(this.req.url);

    if (parsedUrl) {
      // Get user from db
      const userId = parsedUrl.query.id;
      const user = await this.userDbAccess.getOneUserInDB(userId as string);

      if (user) {
        this.res.writeHead(HTTP_CODES.OK, {
          "Content-Type": "application/json",
        });
        this.res.write(JSON.stringify(user));
      } else {
        this.handleNotFound("No user found!");
      }
    }

    return undefined;
  }
}

export default UsersHandler;
