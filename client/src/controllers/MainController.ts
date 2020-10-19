import BaseController from "./BaseController";

class MainController extends BaseController {
  private title = this.createDomEl("h2", "Welcome to the best website ever!");
  private button = this.createDomEl("button", "To Login", () => {
    console.log(
      "window.location.pathname!",
      (window.location.pathname = "/login")
    );
  });
  private article = this.createDomEl(
    "article",
    "I know, crazy statement but true!"
  );

  public createView(): HTMLDivElement {
    this.container.append(this.title, this.article, this.button);

    return this.container;
  }
}

export default MainController;
