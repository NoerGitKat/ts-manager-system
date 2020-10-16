import BaseController from "./BaseController";

interface Input {
  [key: string]: string;
}

class LoginController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createDomEl("h2", "Please Login Here!");
    const username = this.createDomEl("label", "Username:");
    const password = this.createDomEl("label", "Password:");
    const loginButton = this.createDomEl("button", "Login!");
    const breakEl = this.createDomEl("br", null);

    const usernameInput = this.createInputEl({
      type: "text",
      placeholder: "Username",
    });

    const passwordInput = this.createInputEl({
      type: "password",
      placeholder: "Password",
    });

    this.container.append(
      title,
      username,
      usernameInput,
      password,
      passwordInput,
      breakEl,
      loginButton
    );

    return this.container;
  }

  private createInputEl(options: Input): HTMLInputElement {
    const input: HTMLInputElement = document.createElement("input");

    const keys: string[] = Object.keys(options);

    keys.map(function (property: string, index: number): void {
      input[property] = options[property];
    });

    return input;
  }
}

export default LoginController;
