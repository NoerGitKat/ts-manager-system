import Router from "./Router";
class Main {
    constructor() {
        console.log("Running an instance of TS!");
        this.router = new Router();
    }
    launchApp() {
        this.router.handleRequest();
    }
}
export default Main;
new Main().launchApp();
//# sourceMappingURL=Main.js.map