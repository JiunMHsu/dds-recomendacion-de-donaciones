"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRouter = void 0;
const shared_1 = require("../shared");
const test_controller_1 = require("./test.controller");
class TestRouter extends shared_1.BaseRouter {
    constructor() {
        super(test_controller_1.TestController);
    }
    routes() {
        this.router.get('/test', this.controller.test);
        this.router.get('/test/json', this.controller.testJson);
    }
}
exports.TestRouter = TestRouter;
