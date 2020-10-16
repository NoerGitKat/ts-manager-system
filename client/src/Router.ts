import LoginController from "./controllers/LoginController";
import MainController from "./controllers/MainController";

class Router {
  private rootEl = document.getElementById("root");

  public handleRequest() {
    const route = this.getRoute();

    console.log("route", route);
    switch (route) {
      case "/":
        if (this.rootEl) {
          const mainController: MainController = new MainController();
          this.rootEl.append(mainController.createView());
        }
        break;
      case "/login":
        if (this.rootEl) {
          const loginController: LoginController = new LoginController();
          this.rootEl.append(loginController.createView());
        }
        break;
      default:
        if (this.rootEl) {
          this.rootEl.innerText = "Nothing to see here.";
        }
        break;
    }
  }

  private getRoute(): string {
    return window.location.pathname.replace("/client", "");
  }
}

export default Router;
