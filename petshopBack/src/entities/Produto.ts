import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Double, OneToMany } from "typeorm"
import { type } from "os"
import { join } from "path"
import { ItemCarrinho } from "./ItemCarrinho"

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    descricao: string

    @Column()
    codigo: string

    @Column()
    categoria: string

    @Column()
    preco: number

    @Column('longtext')
    imagem: string

    @OneToMany(() =>ItemCarrinho, (item) =>item.produto)
    item: ItemCarrinho

}