import { Localidad } from '../localidad/localidad.model';

export interface PuntoDonacion {
    // id: number;
    nombre: string;
    localidad: Localidad;
    calle: string;
    altura: Number;
}
