import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Localidad } from '../puntoDonacion/puntoDonacion.model';
import { Provincia } from '../puntoDonacion/puntoDonacion.model';


@Entity()
export class LocalidadEntity implements Localidad {
    @PrimaryGeneratedColumn()
    id_localidad!: number;

    @Column()
    nombre!: string;

    @Column()
    localidad!: Localidad;

    @Column()
    provincia!: Provincia;

    @Column()
    etiqueta!: string;
}