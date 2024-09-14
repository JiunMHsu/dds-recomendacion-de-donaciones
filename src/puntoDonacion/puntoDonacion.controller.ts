import { Request, Response } from 'express';
import repository from './puntoDonacion.repository';

const getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
        const puntosRecomendados = await repository.getAll();

        res.status(200).send(JSON.stringify(puntosRecomendados));
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

        res.status(200).send(JSON.stringify(puntoDonacion));
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

        // validar provincia y localidad
        // puede que alguno sea undefined

        const puntosDonacion = await repository.getByProvinciaAndLocalidad(
            provincia,
            localidad,
        );

        res.status(200).send(JSON.stringify(puntosDonacion));
    } catch (error) {
        res.status(400).json({ error: '' });
    }
};

export default {
    getAll,
    getById,
    getByProvinciaAndLocalidad,
};

// Cambios en las respuestas:
// - Uso de Stringify para convertir los obj. en strings (formato JSON claro)
// - De esta manera evito hacer funciones auxiliares (creo q no te gustaba la idea)
// PD: subo los cambios xlas aunque ahora m voy a poner a probarlo

