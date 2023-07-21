import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Double, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { type } from "os"
import { join } from "path"
import { ItemCarrinho } from "./ItemCarrinho"
import { Usuario } from "./Usuario"


@Entity()
export class Carrinho {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date
 
    @ManyToOne(() => Usuario, (usuario) => usuario.carrinho)
    usuario: Usuario

    @OneToMany(() => ItemCarrinho, (item) => item.carrinho)
    itemCarro: ItemCarrinho[]

}