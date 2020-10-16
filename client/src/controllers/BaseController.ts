// Abstract classes are used to provide a common design across classes

abstract class BaseController {
  protected container = document.createElement("div");

  public abstract createView(): HTMLDivElement;

  protected createDomEl(el: string, text: string | null): HTMLElement {
    const element = document.createElement(el);
    if (text) {
      element.innerText = text;
    }
    return element;
  }
}

export default BaseController;
