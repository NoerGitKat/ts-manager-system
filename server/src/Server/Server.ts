import { createServer, IncomingMessage, ServerResponse } from "http";
import Authorizer from "./../Authorization/Authorizer";
import LoginHandler from "./LoginHandler";
import UsersHandler from "./UsersHandler";
import Utils from "./Utils";

class Server {
  private authorizer: Authorizer = new Authorizer();

  public startServer(PORT: string | number) {
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
      const route = Utils.getUrlRoute(req.url);

      this.addCorsHeader(res);

      switch (route) {
        case "/login":
          const loginHandler = new LoginHandler(req, res, this.authorizer);
          await loginHandler.handleRequest();
          break;
        case "/users":
          const usersHandler = new UsersHandler(req, res, this.authorizer);
          await usersHandler.handleRequest();
          break;
        default:
          console.log("other route asds");
          break;
      }

      res.end();
    }).listen(PORT);
  }

  private addCorsHeader(res: ServerResponse): void {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
  }
}

export default Server;
