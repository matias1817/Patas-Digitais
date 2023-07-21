import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { type } from "os"
import { join } from "path"

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    idEndereco: number

    @Column()
    rua: string

    @Column()
    bairro: string

    @Column()
    cep: string

    @Column()
    cidade: string

    @Column()
    numero: number

}