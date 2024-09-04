import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PuntoDonacion } from '../puntoDonacion/puntoDonacion.model';
import { Localidad } from '../puntoDonacion/puntoDonacion.model';
import { Provincia } from '../puntoDonacion/puntoDonacion.model';


@Entity()
export class Recomendacion implements PuntoDonacion {
    @PrimaryGeneratedColumn()
    id_recomendacion!: number;

    @Column()
    nombre!: string;

    @Column()
    localidad!: Localidad;

    @Column()
    provincia!: Provincia;

    @Column()
    calle!: string;

    @Column()
    altura!: number;

    @Column()
    latitud!: string;

    @Column()
    longitud!: string;
}