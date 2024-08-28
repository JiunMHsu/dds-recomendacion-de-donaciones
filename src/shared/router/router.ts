import { Router } from 'express';

export abstract class BaseRouter<T> {
    public router: Router;
    protected controller: T;

    constructor(TController: { new (): T }) {
        this.router = Router();
        this.controller = new TController();
        this.routes();
    }

    public abstract routes(): void;
}
