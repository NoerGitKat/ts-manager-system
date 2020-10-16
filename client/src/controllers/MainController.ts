import BaseController from "./BaseController";

class MainController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createDomEl("h2", "Welcome to the best website ever!");
    const button = this.createDomEl("button", "To Login");
    const article = this.createDomEl(
      "article",
      "I know, crazy statement but true!"
    );

    this.container.append(title, article, button);

    return this.container;
  }
}

export default MainController;
