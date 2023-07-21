import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Double, ManyToOne } from "typeorm"
import { type } from "os"
import { join } from "path"
import { Carrinho } from "./Carrinho"
import { Produto } from "./Produto"

@Entity()
export class ItemCarrinho {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: number

    @Column()
    valorUnitario: number

    @Column()
    valorTotal: number

    @ManyToOne(() => Carrinho, (carrinho) => carrinho.itemCarro)
    carrinho: Carrinho

    @ManyToOne(() => Produto, (produto) => produto.item)
    produto: Produto


}