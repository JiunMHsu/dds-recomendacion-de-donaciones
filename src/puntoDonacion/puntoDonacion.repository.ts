import { Repository } from 'typeorm';
import { PuntoDonacion } from './puntoDonacion.model';
import { AppDataSource } from '../db/data.source';

export class PuntoDonacionRepository {
    private repository: Repository<PuntoDonacion>;

    constructor() {
        this.repository = AppDataSource.getRepository(PuntoDonacion);
    }

    public async guardar(puntoDonacion: PuntoDonacion): Promise<PuntoDonacion> {
        // INSERT
        return await this.repository.save(puntoDonacion);
    }

    public async modificar(
        puntoDonacion: PuntoDonacion,
    ): Promise<PuntoDonacion> {
        // UPDATE
        return await this.repository.save(puntoDonacion);
    }

    public async eliminar(puntoDonacion: PuntoDonacion): Promise<void> {
        await this.repository.remove(puntoDonacion);
    }

    public async buscarPorProvinciaYLocalidad(
        provincia: string,
        localidad: string,
    ): Promise<PuntoDonacion[]> {
        console.log(provincia, localidad);

        return await this.repository
            .createQueryBuilder('puntoDonacion')
            .where('puntoDonacion.provincia.etiqueta = :provincia', {
                provincia,
            })
            .andWhere('puntoDonacion.localidad.etiqueta = :localidad', {
                localidad,
            })
            .getMany();
    }

    // async buscarPorLocalidad(nombre: string): Promise<PuntoDonacion[]> {
    //     return await this.repository
    //         .createQueryBuilder('puntoDonacion')
    //         .where("puntoDonacion.localidad->>'nombre' = :nombre", { nombre })
    //         .getMany();
    // }

    public async buscarTodos(): Promise<PuntoDonacion[]> {
        console.log('asdfasf', 'asdasdas');
        return await this.repository.find();
    }

    public async test(a: string, b: string) {
        console.log(a, b);
    }
}
