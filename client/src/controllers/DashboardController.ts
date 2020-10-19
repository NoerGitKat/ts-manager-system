import { Privilege, SessionToken } from "../models/Model";
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
      this.generatePrivilegeButtons();
    }

    this.container.append(this.pageTitle, this.paragraph);

    return this.container;
  }

  private generatePrivilegeButtons() {
    if (this.token) {
      let element;
      for (const privilege of this.token.privileges) {
        element = this.createDomEl("button", Privilege[privilege]);
        this.container.append(element);
      }
    }
  }
}

export default DashboardController;
