import { createServer, IncomingMessage, ServerResponse } from "http";
import Utils from "./Utils";

class Server {
  public createServer(PORT: string | number) {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      const route = Utils.getUrlRoute(req.url);

      switch (route) {
        case "/login":
          console.log("go to login route");
          break;
        default:
          console.log("other route asds");
      }

      res.end();
    }).listen(PORT);
  }
}

export default Server;
