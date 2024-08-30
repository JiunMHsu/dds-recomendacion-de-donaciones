import express from 'express';
import cors from 'cors';
import { ServerConfig } from './config/server.config';
import { TestRouter } from './test/test.router';

class ServerBootstrap {
    private app: express.Application;
    private config: ServerConfig;
    private host: string;
    private port: number;

    constructor() {
        this.app = express();
        this.config = new ServerConfig();

        this.host = this.config.getEnviroment('HOST') ?? '127.0.0.1';
        this.port = this.config.getNumberEnv('PORT') ?? 5050;

        this.app.disable('x-powered-by');

        // seteando middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/api', this.routes());

        this.listen();
    }

    private routes(): express.Router[] {
        const routers = [new TestRouter()];
        return routers.map(router => router.router);
    }

    private listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server listening on http://${this.host}:${this.port}`);
        });
    }
}

new ServerBootstrap();
