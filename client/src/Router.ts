import DashboardController from "./controllers/DashboardController";
import LoginController from "./controllers/LoginController";
import MainController from "./controllers/MainController";
import { SessionToken } from "./models/Model";

class Router {
  private rootEl = document.getElementById("root");

  public handleRequest() {
    const route = this.getRoute();

    switch (route) {
      case "/":
        if (this.rootEl) {
          const mainController: MainController = new MainController(this);
          this.rootEl.append(mainController.createView());
        }
        break;
      case "/login":
        if (this.rootEl) {
          const loginController: LoginController = new LoginController(this);
          this.rootEl.append(loginController.createView());
        }
        break;
      case "/dashboard":
        this.switchToDashboardPage(undefined);
        break;
      default:
        if (this.rootEl) {
          this.rootEl.innerText = "Nothing to see here.";
        }
        break;
    }
  }

  public switchToDashboardPage(token: SessionToken | undefined): void {
    const dashboardController: DashboardController = new DashboardController(
      this
    );
    if (token) {
      dashboardController.setSessionToken(token);

      // window.location.pathname = "/dashboard";

      if (this.rootEl) {
        this.rootEl.innerHTML = "";
        this.rootEl.append(dashboardController.createView());
      }
    } else {
      console.log("token gone", token);
      window.location.pathname = "/";
    }
  }

  private getRoute(): string {
    return window.location.pathname.replace("/client", "");
  }
}

export default Router;
