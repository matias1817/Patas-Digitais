import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { AppServiceCarrinho } from '../services/app.serviceCarrinho';
import {Carrinho} from '../entities/Carrinho';
import { AppService } from 'src/services/app.service';
import { ItemCarrinho } from 'src/entities/ItemCarrinho';
import { AppServiceItemCarrinho } from 'src/services/app.serviceItemCarrinho';
import { AppServiceProduto } from 'src/services/app.serviceProduto';

@Controller('/carrinho')
export class AppControllerCarrinho {
 
  constructor(private readonly appServiceProduto: AppServiceProduto, private readonly appService: AppServiceCarrinho, private readonly appServiceUsuario: AppService, private readonly appServiceItemCarrinho: AppServiceItemCarrinho) {}
 
  @Post()
  async salvarDados(@Body() dados: any): Promise<ItemCarrinho> {

    const carrinho = new Carrinho();
    carrinho.data = new Date();
    const user = await this.appServiceUsuario.listarUsuariosEsp(dados.idUsuario)
    carrinho.usuario = user;
    const carrinho1 = await this.appService.salvarDados(carrinho)

    const itemcarrinho1 = new ItemCarrinho()
    itemcarrinho1.carrinho = carrinho1
    itemcarrinho1.produto = dados.produto
    itemcarrinho1.quantidade = dados.quantidade
    itemcarrinho1.valorTotal = dados.quantidade
    const produto = await this.appServiceProduto.listarProdutosEsp(dados.produto)
    itemcarrinho1.valorUnitario = produto.preco * dados.quantidade
    const itemcarrinho = await this.appServiceItemCarrinho.salvarDados(itemcarrinho1)
    
    return itemcarrinho;
    //const carrinho = await this.appService.salvarDados(dados);

    //return carrinho; 
  }
  @Get()
  async listarCarrinhos(): Promise<Carrinho[]> {
    return this.appService.listarCarrinhos();
  }
  @Get(':id')
  async listarCarrinhosEsp(@Param('id') id : number): Promise<Carrinho> {
    return this.appService.listarCarrinhosEsp(id);
  }
  @Put(':id')
  async atualizarCarrinhos(@Param('id') id: number, @Body() dadosAtualizados: Partial<Carrinho>): Promise<Carrinho> {
    return this.appService.atualizarCarrinhos(id, dadosAtualizados);
  }
  @Delete(':id')
  async deletarCarrinhos(@Param('id') id: number, @Body() dadosAtualizados: Partial<Carrinho>): Promise<void> {
    return this.appService.deletarCarrinhos(id, dadosAtualizados);
  }

}
