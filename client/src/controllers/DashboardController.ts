import { SessionToken } from "../models/Model";
import BaseController from "./BaseController";

class DashboardController extends BaseController {
  private token: SessionToken | undefined;
  private pageTitle: HTMLHeadElement = this.createDomEl("h2", "The Dashboard");
  private paragraph: HTMLElement = this.createDomEl("p", "Welcome.");

  public setSessionToken(token: SessionToken): void {
    this.token = token;
  }

  public createView(): HTMLDivElement {
    if (this.token) {
      this.paragraph = this.createDomEl(
        "p",
        `Welcome, ${this.token.username}!`
      );
    }

    console.log("whats happening");

    this.container.append(this.pageTitle, this.paragraph);

    return this.container;
  }
}

export default DashboardController;
