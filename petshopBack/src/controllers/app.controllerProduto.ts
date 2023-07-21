import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { AppServiceProduto } from '../services/app.serviceProduto';
import {Produto} from '../entities/Produto';

import { Endereco } from '../entities/Endereco';
import { AppServiceEndereco } from '../services/app.serviceEndereco';

@Controller('/produto')
export class AppControllerProduto {
 
  constructor(private readonly appService: AppServiceProduto) {}
 
  @Post()
  async salvarDados(@Body() dados:Produto) {

    const produto = await this.appService.salvarDados(dados);

    return produto; 
  }
  @Get()
  async listarProdutos(): Promise<Produto[]> {
    return this.appService.listarProdutos();
  }
  @Get(':id')
  async listarProdutosEsp(@Param('id') id : number): Promise<Produto> {
    return this.appService.listarProdutosEsp(id);
  }
  @Put(':id')
  async atualizarProdutos(@Param('id') id: number, @Body() dadosAtualizados: Partial<Produto>): Promise<Produto> {
    console.log(dadosAtualizados)
    return this.appService.atualizarProdutos(id, dadosAtualizados);
  }
  @Delete(':id')
  async deletarProdutos(@Param('id') id: number, @Body() dadosAtualizados: Partial<Produto>): Promise<void> {
    return this.appService.deletarProdutos(id, dadosAtualizados);
  }

}