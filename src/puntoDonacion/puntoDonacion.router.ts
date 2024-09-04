import { Request, Response } from 'express';
import { BaseRouter } from '../shared';
import { PuntoDonacionController } from './puntoDonacion.controller';

export class PuntoDonacionRouter extends BaseRouter<PuntoDonacionController> {
    constructor() {
        super(PuntoDonacionController);
    }

    public routes() {
        this.router.get(
            '/:provincia/:localidad',
            this.controller.getPuntoDonacion,
        );
    }
}
