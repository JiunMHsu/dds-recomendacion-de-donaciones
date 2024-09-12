import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity({ name: 'provincia' })
export class Provincia {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 100 })
    nombre!: string;

    @Column('varchar', { length: 100 })
    etiqueta!: string;
}

@Entity({ name: 'localidad' })
export class Localidad {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 100 })
    nombre!: string;

    @Column('varchar', { length: 100 })
    etiqueta!: string;
}

@Entity({ name: 'punto_donacion' })
export class PuntoDonacion {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar', { length: 100 })
    nombre!: string;

    @ManyToOne(() => Localidad)
    @JoinColumn({ name: 'id_localidad' })
    localidad!: Localidad;

    @ManyToOne(() => Provincia)
    @JoinColumn({ name: 'id_provincia' })
    provincia!: Provincia;

    @Column('varchar', { length: 100 })
    calle!: string;

    @Column('int')
    altura!: number;

    @Column('varchar', { length: 255 })
    latitud!: string;

    @Column('varchar', { length: 255 })
    longitud!: string;
}
