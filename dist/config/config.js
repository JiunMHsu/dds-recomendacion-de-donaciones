"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
const dotenv = __importStar(require("dotenv"));
class ServerConfig {
    constructor() {
        const envPath = this.getEnvPath(this.nodeEnv);
        dotenv.config({
            path: envPath,
        });
    }
    get nodeEnv() {
        return this.getEnviroment('NODE_ENV') || '';
    }
    getEnviroment(key) {
        const value = process.env[key];
        return value ? value : undefined;
    }
    getNumberEnv(key) {
        const value = this.getEnviroment(key);
        return value ? parseInt(value) : undefined;
    }
    getEnvPath(nodeEnv) {
        return nodeEnv == '' ? '.env' : `.${nodeEnv}.env`;
    }
    get database() {
        var _a, _b, _c, _d, _e;
        return {
            host: (_a = this.getEnviroment('DB_HOST')) !== null && _a !== void 0 ? _a : 'localhost',
            port: (_b = this.getNumberEnv('DB_PORT')) !== null && _b !== void 0 ? _b : 3306,
            user: (_c = this.getEnviroment('DB_USER')) !== null && _c !== void 0 ? _c : 'root',
            password: (_d = this.getEnviroment('DB_PASSWORD')) !== null && _d !== void 0 ? _d : 'root',
            name: (_e = this.getEnviroment('DB_DATABASE')) !== null && _e !== void 0 ? _e : 'recomendaciondedonaciones',
        };
    }
}
exports.ServerConfig = ServerConfig;
