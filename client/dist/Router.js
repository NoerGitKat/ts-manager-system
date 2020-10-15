class Router {
    handleRequest() {
        console.log(`We are on route: ${this.getRoute()}!`);
    }
    getRoute() {
        return window.location.pathname;
    }
}
export default Router;
//# sourceMappingURL=Router.js.map