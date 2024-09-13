import { PuntoDonacion } from './puntoDonacion.entity';
import dataSource from '../db/datasource';

const repository = dataSource.getRepository(PuntoDonacion);

export const createPuntoDonacion = async (puntoDonacion: PuntoDonacion) => {
    return await repository.save(puntoDonacion);
};

export const updatePuntoDonacion = async (
    id: string,
    puntoDonacion: PuntoDonacion,
) => {
    return await repository.update(id, puntoDonacion);
};

export const removePuntoDonacion = async (id: string) => {
    return await repository.delete(id);
};

export const getAllPuntoDonacion = async () => {
    return await repository.find();
};

export const getPuntoDonacionById = async (id: string) => {
    return await repository.findOne({
        where: {
            id: id,
        },
    });
};

export const getByProvinciaAndLocalidad = async (
    provincia: string,
    localidad: string,
) => {
    return await repository
        .createQueryBuilder('punto_donacion')
        .where('punto_donacion.provincia.etiqueta = :provincia', { provincia })
        .andWhere('punto_donacion.localidad.etiqueta = :localidad', {
            localidad,
        })
        .getMany();
};
