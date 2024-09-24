import { Router } from 'express';
import controller from './puntoDonacion.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     PuntoDonacion:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: UUID del punto de donación.
 *         nombre:
 *           type: string
 *           description: Nombre del punto de donación.
 *         calle:
 *           type: string
 *           description: Calle del punto de donación.
 *         altura:
 *           type: number
 *           description: Altura del punto de donación.
 *         latitud:
 *           type: string
 *           description: Latitud del punto de donación.
 *         longitud:
 *           type: string
 *           description: Longitud del punto de donación.
 *         localidad:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               description: ID de la localidad.
 *             nombre:
 *               type: string
 *               description: Nombre de la localidad.
 *             etiqueta:
 *               type: string
 *               description: Etiqueta de la localidad.
 *         provincia:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *               description: ID de la localidad.
 *             nombre:
 *               type: string
 *               description: Nombre de la localidad.
 *             etiqueta:
 *               type: string
 *               description: Etiqueta de la localidad.
 *       example:
 *         id: 3a7502ae-7185-11ef-98ce-3c7c3f266695
 *         nombre: punto2
 *         calle: Av. Cordoba
 *         altura: 4857
 *         latitud: 5468968245
 *         longitud: 5643212543
 *         provincia:
 *           id: 1
 *           nombre: Ciudad Autonoma de Buenos Aires
 *           etiqueta: caba
 *         localidad:
 *           id: 1
 *           nombre: Almagro
 *           etiqueta: almagro
 *
 *
 */

/**
 * @swagger
 * /api/punto-donacion:
 *   get:
 *     tags:
 *      - PuntoDonacion
 *     summary: Retorna una lista de puntos de donación.
 *     description: Obtiene los puntos de donación por provincia y localidad.
 *     parameters:
 *      - in: query
 *        name: provincia
 *        schema:
 *          type: string
 *        required: true
 *        description: Nombre de la provincia (etiqueta).
 *      - in: query
 *        name: localidad
 *        schema:
 *          type: string
 *        required: true
 *        description: Nombre de la localidad (etiqueta).
 *     responses:
 *       200:
 *         description: Retorna una lista de puntos de donación.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PuntoDonacion'
 */
router.get('/', controller.getByProvinciaAndLocalidad);

/**
 * @swagger
 * /api/punto-donacion/{id}:
 *   get:
 *     tags:
 *      - PuntoDonacion
 *     summary: Retorna un punto de donación.
 *     description: Obtiene un puntos de donación por ID.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *        description: UUID del punto de donación.
 *     responses:
 *       200:
 *         description: Retorna un punto de donación.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PuntoDonacion'
 */
router.get('/:id', controller.getById);

export default router;
