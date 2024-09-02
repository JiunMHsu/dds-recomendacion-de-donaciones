import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Recomendacion {
    @PrimaryGeneratedColumn()
    id_recomendacion!: number;

    @Column()
    nombre!: string;

    @Column()
    localidad!: string;

    @Column()
    provincia!: string;

    @Column()
    calle!: string;

    @Column()
    altura!: string;

    @Column()
    latitud!: string;

    @Column()
    longitud!: string;
}