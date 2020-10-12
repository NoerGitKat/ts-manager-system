import { createServer, IncomingMessage, ServerResponse } from "http";

class Server {
  public createServer(port: string | number) {
    createServer((req: IncomingMessage, res: ServerResponse) => {
      console.log("Got a request from the following url", req.url);
      res.end();
    }).listen(port);
  }
}

export default Server;
