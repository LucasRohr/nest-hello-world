import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn({ type: 'bigint' }) id: number;
    @Column({ type: 'varchar', length: 20 }) name: string;
    @Column({ type: 'varchar', length: 30 }) password: string


}