"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const test_router_1 = require("./test/test.router");
class ServerBootstrap {
    constructor() {
        var _a, _b;
        this.app = (0, express_1.default)();
        this.config = new config_1.ServerConfig();
        this.host = (_a = this.config.getEnviroment('HOST')) !== null && _a !== void 0 ? _a : '127.0.0.1';
        this.port = (_b = this.config.getNumberEnv('PORT')) !== null && _b !== void 0 ? _b : 5050;
        this.app.disable('x-powered-by');
        // seteando middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routes());
        this.listen();
    }
    routes() {
        const routers = [new test_router_1.TestRouter()];
        return routers.map(router => router.router);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server listening on http://${this.host}:${this.port}`);
        });
    }
}
new ServerBootstrap();
