import BaseController from "./BaseController";

class LoginController extends BaseController {
  private title = this.createDomEl("h2", "Please Login Here!");
  private username = this.createDomEl("label", "Username:");
  private password = this.createDomEl("label", "Password:");
  private error = this.createDomEl("label");
  private loginButton = this.createDomEl("button", "Login!", () => {
    if (this.usernameInput.value && this.passwordInput.value) {
      this.resetErrorMessage(this.error);
    } else {
      this.showErrorMessage(this.error);
    }
  });
  private usernameInput = this.createInputEl({
    type: "text",
    placeholder: "Username",
  });

  private passwordInput = this.createInputEl({
    type: "password",
    placeholder: "Password",
  });
  private breakEl = this.createDomEl("br", null);

  public createView(): HTMLDivElement {
    this.container.append(
      this.title,
      this.username,
      this.usernameInput,
      this.password,
      this.passwordInput,
      this.breakEl,
      this.loginButton,
      this.error
    );

    return this.container;
  }

  private resetErrorMessage(error: HTMLElement): void {
    error.style.visibility = "hidden";
  }
  private showErrorMessage(error: HTMLElement): void {
    error.innerText = "Please fill in all fields.";
    error.style.color = "red";
    error.style.visibility = "visible";
  }
}

export default LoginController;
