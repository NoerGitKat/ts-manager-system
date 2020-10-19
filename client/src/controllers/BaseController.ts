// Abstract classes are used to provide a common design across classes

import Router from "../Router";
import { Input } from "../types/controller-types";

abstract class BaseController {
  protected container = document.createElement("div");
  protected router: Router;

  public constructor(router: Router) {
    this.router = router;
  }

  public abstract createView(): HTMLDivElement;

  protected createDomEl(
    el: string,
    text?: string | null,
    action?: any
  ): HTMLElement {
    const element = document.createElement(el);
    if (text) {
      element.innerText = text;
    }

    if (action) {
      element.onclick = action;
    }
    return element;
  }

  protected createInputEl(options: Input): HTMLInputElement {
    const input: HTMLInputElement = document.createElement("input");

    const keys: string[] = Object.keys(options);

    keys.map(function (property: string, index: number): void {
      input[property] = options[property];
    });

    return input;
  }
}

export default BaseController;
