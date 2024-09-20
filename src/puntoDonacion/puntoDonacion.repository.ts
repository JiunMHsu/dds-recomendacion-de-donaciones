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

// const getAll = async () => {
//     const puntosDonacion = await repository.find({
//         relations: ['provincia', 'localidad'], // Incluye las relaciones en la consulta
//     });

//     return puntosDonacion.map(punto => ({
//         id: punto.id,
//         nombre: punto.nombre,
//         calle: punto.calle,
//         altura: punto.altura,
//         latitud: punto.latitud,
//         longitud: punto.longitud,
//         provincia: punto.provincia ? punto.provincia.nombre : null, // Incluye el nombre de la provincia
//         localidad: punto.localidad ? punto.localidad.nombre : null, // Incluye el nombre de la localidad
//     }));
// };

const getById = async (id: string) => {
    return await repository.findOne({
        where: {
            id: id,
        },
        relations: ['provincia', 'localidad'], // Incluye las relaciones en la consulta
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
    create,
    update,
    remove,
    // getAll,
    getById,
    getByProvinciaAndLocalidad,
};
