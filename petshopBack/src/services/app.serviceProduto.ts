import { Injectable } from '@nestjs/common';
import { Produto } from '../entities/Produto';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppServiceProduto {
  constructor(
    @InjectRepository(Produto)
    private ProdutoRepository: Repository<Produto>,
  ) {}

  async salvarDados(dados: Produto): Promise<Produto> {
    const produto = this.ProdutoRepository.create(dados);
    
    await this.ProdutoRepository.save(produto);
    return produto;
  }
  
  async listarProdutosEsp(id: number): Promise<Produto> {
    const produto = await this.ProdutoRepository.findOne({where:{id}});
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    return produto;
  }
  async listarProdutos(): Promise<Produto[]> {
    return this.ProdutoRepository.find();
  }
  async atualizarProdutos(id: number, dadosAtualizados: Partial<Produto>): Promise<Produto> {
    const produto = await this.ProdutoRepository.findOne({where:{id}});
    if (!produto) {
      throw new Error('Produto não encontrado');
    }

  Object.assign(produto, dadosAtualizados);

    return await this.ProdutoRepository.save(produto);
  }
  async deletarProdutos(id: number, dadosAtualizados: Partial<Produto>): Promise<void> {
    const produto = await this.ProdutoRepository.findOne({where:{id}});
    if (!produto) {
      throw new Error('Produto não encontrado');
    }
    Object.assign(produto, dadosAtualizados);
    await this.ProdutoRepository.remove(produto);
  }

}

