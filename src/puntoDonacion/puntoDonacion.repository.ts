import { Recomendacion } from '../db/recomendacion';
import { LocalidadEntity } from '../db/localidad';
import { getRepository, Repository } from 'typeorm';

export class RepositorioDePuntosDonacion {

    private repository: Repository<Recomendacion>;

    constructor() {
        this.repository = getRepository(Recomendacion);
    }

    async guardar(recomendacion: Recomendacion): Promise<Recomendacion> {
        return await this.repository.save(recomendacion); // INSERT
    }

    async modificar(recomendacion: Recomendacion): Promise<Recomendacion> {
        return await this.repository.save(recomendacion); // UPDATE
    }

    async eliminarFisico(recomendacion: Recomendacion): Promise<void> {
        await this.repository.remove(recomendacion); // DELETE
    }

    async eliminar(recomendacion: Recomendacion): Promise<Recomendacion> {
        recomendacion.activo = false;
        return await this.repository.save(recomendacion); // Soft delete
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