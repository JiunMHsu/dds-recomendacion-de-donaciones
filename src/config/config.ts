import * as dotenv from 'dotenv';

export class ServerConfig {
    constructor() {
        const envPath = this.getEnvPath(this.nodeEnv);
        dotenv.config({
            path: envPath,
        });
    }

    public get nodeEnv(): string {
        return this.getEnviroment('NODE_ENV') || '';
    }

    public getEnviroment(key: string): string | undefined {
        const value = process.env[key];
        return value ? value : undefined;
    }

    public getNumberEnv(key: string): number | undefined {
        const value = this.getEnviroment(key);
        return value ? parseInt(value) : undefined;
    }

    public getEnvPath(nodeEnv: string): string {
        return nodeEnv == '' ? '.env' : `.${nodeEnv}.env`;
    }

    public get database() {
        return {
            host: this.getEnviroment('DB_HOST') ?? 'localhost',
            port: this.getNumberEnv('DB_PORT') ?? 3306,
            user: this.getEnviroment('DB_USER') ?? 'root',
            password: this.getEnviroment('DB_PASSWORD') ?? 'root',
            name:
                this.getEnviroment('DB_DATABASE') ??
                'recomendaciondedonaciones',
        };
    }
}
