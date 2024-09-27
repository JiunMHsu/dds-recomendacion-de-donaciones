import { PuntoDonacion } from './puntoDonacion.entity';
import dataSource from '../db/datasource';

const repository = dataSource.getRepository(PuntoDonacion);

const getById = async (id: string) => {
    return await repository.findOne({
        where: {
            id: id,
        },
        relations: ['provincia', 'localidad'],
    });
};

const getByProvinciaAndLocalidad = async (
    provincia: string,
    localidad: string,
) => {
    return await repository
        .createQueryBuilder('punto_donacion')
        .leftJoinAndSelect('punto_donacion.provincia', 'provincia')
        .leftJoinAndSelect('punto_donacion.localidad', 'localidad')
        .where('provincia.etiqueta = :provincia', { provincia })
        .andWhere('localidad.etiqueta = :localidad', { localidad })
        .getMany();
};

export default {
    getById,
    getByProvinciaAndLocalidad,
};
