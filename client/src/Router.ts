class Router {
  public handleRequest() {
    console.log(`We are on route: ${this.getRoute()}!`);
  }

  private getRoute(): string {
    return window.location.pathname;
  }
}

export default Router;
