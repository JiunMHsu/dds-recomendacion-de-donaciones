import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ServerConfig } from './config/server.config';
import puntoDonacionRouter from './puntoDonacion/puntoDonacion.router';
import dataSource from './db/datasource';

const main = async () => {
    try {
        const app = express();
        const config = new ServerConfig();

        const host = config.getEnviroment('HOST') ?? '127.0.0.1';
        const port = config.getNumberEnv('PORT') ?? 5050;

        app.disable('x-powered-by');

        await dataSource.initialize();

        // seteando middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morgan('dev'));
        app.use(cors());

        app.use('/test', () => {
            console.log('test');
        });
        app.use('/api/puntoDonacion', puntoDonacionRouter);
        app.use((_req, res) => {
            res.status(404).json({ message: 'not found' });
        });

        app.listen(port, () => {
            console.log(`server listening on http://${host}:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

main();
