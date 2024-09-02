import { Request, Response } from 'express';
import { BaseRouter } from '../shared';
import { PuntoDonacionController } from './puntoDonacion.controller';

export class PuntoDonacionRouter extends BaseRouter<PuntoDonacionController> {
    constructor() {
        super(PuntoDonacionController);
    }

    public routes() {
        this.router.get('/:provincia', this.controller.getByProvincia);
        this.router.get(
            '/:provincia/:localidad',
            (_req: Request, res: Response) => {
                res.status(200).json({
                    mensaje: 'Puntos de donación en localidad',
                });
            },
        );
    }
}
