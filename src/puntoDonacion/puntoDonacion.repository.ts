import { Recomendacion } from '../db/recomendacion';
import { LocalidadEntity } from '../db/localidad';
import { getRepository, Repository } from 'typeorm';

export class RepositorioDePuntosDonacion {

    private repository: Repository<Recomendacion>;

    constructor() {
        this.repository = getRepository(Recomendacion);
    }

    async guardar(recomendacion: Recomendacion): Promise<Recomendacion> { // INSERT
        return await this.repository.save(recomendacion); 
    }

    async modificar(recomendacion: Recomendacion): Promise<Recomendacion> { // UPDATE
        return await this.repository.save(recomendacion); 
    }

    async eliminarFisico(recomendacion: Recomendacion): Promise<void> { // DELETE
        await this.repository.remove(recomendacion); 
    }

    async eliminar(recomendacion: Recomendacion): Promise<Recomendacion> { //SOFT DELETE
        return await this.repository.save(recomendacion); 
    }

    async buscarPorLocalidad(nombre: string): Promise<Recomendacion[]> {
        return await this.repository.createQueryBuilder("recomendacion")
            .where("recomendacion.localidad->>'nombre' = :nombre", { nombre })
            .getMany();
    }

    async buscarTodos(): Promise<Recomendacion[]> {
        return await this.repository.find();
    }
}
