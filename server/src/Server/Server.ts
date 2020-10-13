import { createServer, IncomingMessage, ServerResponse } from "http";
import LoginHandler from "./LoginHandler";
import Utils from "./Utils";

class Server {
  public startServer(PORT: string | number) {
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
      const route = Utils.getUrlRoute(req.url);

      switch (route) {
        case "/login":
          const loginHandler = new LoginHandler(req, res);
          await loginHandler.handleRequest();
          break;
        default:
          console.log("other route asds");
      }

      res.end();
    }).listen(PORT);
  }
}

export default Server;
