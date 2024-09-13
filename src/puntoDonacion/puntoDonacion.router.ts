import { Router } from 'express';
import controller from './puntoDonacion.controller';

const router = Router();

router.get('/', controller.getAll);
router.get('/', controller.getByProvinciaAndLocalidad);
router.get('/:id', controller.getById);

export default router;
