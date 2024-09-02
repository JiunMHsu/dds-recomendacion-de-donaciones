import { Request, Response } from 'express';

export class PuntoDonacionController {
    public async getByProvincia(req: Request, res: Response): Promise<void> {
        try {
            const provincia = req.params.provincia;
            // recuperar del repo

            res.status(200).json({
                puntosRecomendados: [
                    {
                        nombre: 'Hospital de Clínicas',
                        provincia: provincia,
                        localidad: 'fsdf',
                        calle: 'Av. Medrano',
                        altura: 206,
                    },
                ],
            });
        } catch (error) {
            res.status(400).json({ error: '' });
        }
    }
}
