import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface Provincia {
    nombre: string;
    etiqueta: string;
}

@Entity()
export class Localidad {
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

@Entity()
export class PuntoDonacion {
    @PrimaryGeneratedColumn()
    id_recomendacion!: number;

    @Column()
    nombre!: string;

    @Column()
    localidad!: Localidad;

    @Column()
    calle!: string;

    @Column()
    altura!: number;

    @Column()
    latitud!: string;

    @Column()
    longitud!: string;
}
