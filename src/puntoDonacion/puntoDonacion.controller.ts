import { Request, Response } from 'express';
import { getAllPuntoDonacion } from './puntoDonacion.repository';

export const getPuntoDonacion = async (
    _req: Request,
    res: Response,
): Promise<void> => {
    try {
        const puntosRecomendados = await getAllPuntoDonacion();

        res.status(200).json({ puntosRecomendados: puntosRecomendados });
    } catch (error) {
        res.status(400).json({ error: '' });
    }
};
