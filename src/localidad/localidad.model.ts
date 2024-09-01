import { Provincia } from '../provincia/provincia.model';

export interface Localidad {
    // id: number;
    nombre: string;
    provincia: Provincia;
    etiqueta: string;
}
