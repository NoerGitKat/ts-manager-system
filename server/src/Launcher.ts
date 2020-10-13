import Server from "./Server/Server";

const PORT = process.env.PORT || 8080;

class Launcher {
  private server: Server;

  constructor() {
    this.server = new Server();
  }

  public launchApp() {
    this.server.startServer(PORT);
    console.log(`The server is running on port ${PORT}!`);
  }
}

new Launcher().launchApp();
