import { Request, Response } from 'express';
import { PuntoDonacionRepository } from './puntoDonacion.repository';

export class PuntoDonacionController {
    public async getPuntoDonacion(req: Request, res: Response): Promise<void> {
        try {
            const repository = new PuntoDonacionRepository();
            const provincia = req.params.provincia;
            const localidad = req.params.localidad;

            console.log(provincia, localidad);

            await repository.test(provincia, localidad);

            const puntosRecomendados = await repository.buscarTodos();
            // await this.repository.buscarPorProvinciaYLocalidad(
            //     provincia,
            //     localidad,
            // );

            res.status(200).json({ puntosRecomendados: puntosRecomendados });
        } catch (error) {
            res.status(400).json({ error: '' });
        }
    }
}
