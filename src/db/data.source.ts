import { DataSource } from 'typeorm';
import { ServerConfig } from '../config/server.config';
import { Localidad, Provincia, PuntoDonacion } from '../puntoDonacion/puntoDonacion.model';

const config = new ServerConfig();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: config.database.host,
    port: config.database.port,
    username: config.database.user,
    password: config.database.password,
    database: config.database.name,
    synchronize: false,
    logging: true,
    entities: [PuntoDonacion, Localidad, Provincia],
});
