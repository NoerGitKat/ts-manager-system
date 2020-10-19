import LoginService from "../services/LoginService";
import BaseController from "./BaseController";

class LoginController extends BaseController {
  private loginService = new LoginService();
  private pageTitle = this.createDomEl("h2", "Please Login Here!");
  private username = this.createDomEl("label", "Username:");
  private password = this.createDomEl("label", "Password:");
  private error = this.createDomEl("label");
  private loginButton = this.createDomEl("button", "Login!", async () => {
    if (this.usernameInput.value && this.passwordInput.value) {
      this.resetErrorMessage();
      try {
        const token = await this.loginService.login(
          this.usernameInput.value,
          this.passwordInput.value
        );

        if (token) {
          this.router.switchToDashboardPage(token);
        } else {
          this.showErrorMessage("Incorrect login credentials.");
        }
      } catch (error) {
        console.error("Error happened!", error.message);
      }
    } else {
      this.showErrorMessage("Please fill in all fields.");
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
      this.pageTitle,
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

  private resetErrorMessage(): void {
    this.error.style.visibility = "hidden";
  }
  private showErrorMessage(message: string): void {
    this.error.innerText = message;
    this.error.style.color = "red";
    this.error.style.visibility = "visible";
  }
}

export default LoginController;
