import Router from "./Router";

class Main {
  private router: Router;

  public constructor() {
    console.log("Running an instance of TS!");

    this.router = new Router();
  }

  public launchApp() {
    this.router.handleRequest();
  }
}

export default Main;

new Main().launchApp();
