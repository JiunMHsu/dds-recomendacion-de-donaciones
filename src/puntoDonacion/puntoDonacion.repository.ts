import { PuntoDonacion } from './puntoDonacion.entity';
import dataSource from '../db/datasource';

const repository = dataSource.getRepository(PuntoDonacion);

const create = async (puntoDonacion: PuntoDonacion) => {
    return await repository.save(puntoDonacion);
};

const update = async (id: string, puntoDonacion: PuntoDonacion) => {
    return await repository.update(id, puntoDonacion);
};

const remove = async (id: string) => {
    return await repository.delete(id);
};

const getAll = async () => {
    return await repository.find();
};

const getById = async (id: string) => {
    return await repository.findOne({
        where: {
            id: id,
        },
    });
};

const getByProvinciaAndLocalidad = async (
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

export default {
    create,
    update,
    remove,
    getAll,
    getById,
    getByProvinciaAndLocalidad,
};
