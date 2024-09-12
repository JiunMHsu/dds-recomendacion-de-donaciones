import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ServerConfig } from './config/server.config';
import { PuntoDonacionRouter } from './puntoDonacion/puntoDonacion.router';
import { TestRouter } from './test/test.router';
import { AppDataSource } from './db/datasource';

async function main() {
    try {
        const app = express();
        const config = new ServerConfig();

        const host = config.getEnviroment('HOST') ?? '127.0.0.1';
        const port = config.getNumberEnv('PORT') ?? 5050;

        app.disable('x-powered-by');

        // seteando middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morgan('dev'));
        app.use(cors());

        await AppDataSource.initialize();

        app.use('/test', new TestRouter().router);
        app.use('/api/puntoDonacion', new PuntoDonacionRouter().router);
        app.use((_req, res) => {
            res.status(404).json({ message: 'not found' });
        });

        app.listen(port, () => {
            console.log(`server listening on http://${host}:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}

main();
