import { Request, Response } from 'express';
import repository from './puntoDonacion.repository';

const getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const puntosRecomendados = await repository.getAll();

        res.status(200).json({ puntosRecomendados: puntosRecomendados });
    } catch (error) {
        res.status(400).json({ error: '' });
    }
};

const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const uuid = id.match(
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        );

        if (!uuid) {
            res.status(400).json({ error: 'id invalido' });
            return;
        }

        const puntoDonacion = await repository.getById(uuid.toString());

        res.status(200).json({ puntoDonacion: puntoDonacion });
    } catch (error) {
        res.status(400).json({ error: '' });
    }
};

const getByProvinciaAndLocalidad = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { provincia, localidad } = req.params;

        const puntosDonacion = await repository.getByProvinciaAndLocalidad(
            provincia,
            localidad,
        );

        res.status(200).json({ puntosDonacion: puntosDonacion });
    } catch (error) {
        res.status(400).json({ error: '' });
    }
};

export default {
    getAll,
    getById,
    getByProvinciaAndLocalidad,
};
