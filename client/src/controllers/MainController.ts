class MainController {
  public createView(): HTMLDivElement {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = "Welcome to the best website ever!";

    const article = document.createElement("article");
    article.innerText = "I know, crazy statement but true!";

    const button = document.createElement("button");
    button.innerText = "Login";

    container.append(title, article, button);

    return container;
  }
}

export default MainController;
