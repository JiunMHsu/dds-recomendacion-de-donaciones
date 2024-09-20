import { Request, Response } from 'express';
import repository from './puntoDonacion.repository';

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

        res.status(200).send(JSON.stringify(puntoDonacion));
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

const getByProvinciaAndLocalidad = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const provincia =
            typeof req.query.provincia === 'string' ? req.query.provincia : '';
        const localidad =
            typeof req.query.localidad === 'string' ? req.query.localidad : '';

        const puntosDonacion = await repository.getByProvinciaAndLocalidad(
            provincia,
            localidad,
        );

        res.status(200).send(JSON.stringify(puntosDonacion));
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export default {
    getById,
    getByProvinciaAndLocalidad,
};
