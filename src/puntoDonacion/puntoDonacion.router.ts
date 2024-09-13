import { Request, Response, Router } from 'express';

const router = Router();

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    res.json({ message: 'Success' });
});

router.get('/', (req: Request, res: Response) => {
    try {
        const provincia = req.query.provincia;
        const localidad = req.query.localidad;

        console.log(req.query.provincia);
        console.log(req.query.localidad);

        res.json({ message: 'Success' });
    } catch (error) {
        res.status(400).json({ error: '' });
    }
});

export default router;
