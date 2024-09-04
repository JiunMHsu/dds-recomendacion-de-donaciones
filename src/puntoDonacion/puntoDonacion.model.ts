import { Entity, PrimaryGeneratedColumn, Column, Table } from 'typeorm';

@Entity('provincia')
export class Provincia {
    @PrimaryGeneratedColumn()
    id_provincia!: number;

    @Column()
    nombre!: string;

    @Column()
    etiqueta!: string;
}

@Entity('localidad')
export class Localidad {
    @PrimaryGeneratedColumn()
    id_localidad!: number;

    @Column()
    nombre!: string;

    @Column()
    etiqueta!: string;
}

@Entity('puntoDonacion')
export class PuntoDonacion {
    @PrimaryGeneratedColumn("uuid")
    id_puntoDonacion!: number;

    @Column()
    nombre!: string;

    @Column("id_localidad")
    localidad!: Localidad;

    @Column("id_provincia")
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
