import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { type } from "os"
import { join } from "path"
import { Endereco } from "./Endereco"
import { Carrinho } from "./Carrinho"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    sobrenome: string

    @Column()
    cpf: string

    @Column()
    dataNasc: Date

    @Column()
    email: string

    @Column()
    senha: string

    
    @OneToMany(() => Carrinho, (carrinho) => carrinho.usuario)
    carrinho: Carrinho[]
    
    @OneToOne(() => Endereco)
    @JoinColumn()
    endereco: Endereco
    
}