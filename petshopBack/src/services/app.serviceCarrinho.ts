import { Injectable } from '@nestjs/common';
import { Carrinho } from '../entities/Carrinho';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppServiceCarrinho {
  constructor(
    @InjectRepository(Carrinho)
    private CarrinhoRepository: Repository<Carrinho>,
  ) {}

  async salvarDados(dados: Carrinho): Promise<Carrinho> {
    const carrinho = this.CarrinhoRepository.create(dados);
    
    await this.CarrinhoRepository.save(carrinho);
    return carrinho;
  }
  
  async listarCarrinhosEsp(id: number): Promise<Carrinho> {
    const carrinho = await this.CarrinhoRepository.findOne({where:{id}});
    if (!carrinho) {
      throw new Error('Carrinho não encontrado');
    }
    return carrinho;
  }
  async listarCarrinhos(): Promise<Carrinho[]> {
    return this.CarrinhoRepository.find();
  }
  async atualizarCarrinhos(id: number, dadosAtualizados: Partial<Carrinho>): Promise<Carrinho> {
    const carrinho = await this.CarrinhoRepository.findOne({where:{id}});
    if (!carrinho) {
      throw new Error('Carrinho não encontrado');
    }

  Object.assign(carrinho, dadosAtualizados);

    return await this.CarrinhoRepository.save(carrinho);
  }
  async deletarCarrinhos(id: number, dadosAtualizados: Partial<Carrinho>): Promise<void> {
    const carrinho = await this.CarrinhoRepository.findOne({where:{id}});
    if (!carrinho) {
      throw new Error('Carrinho não encontrado');
    }
    Object.assign(carrinho, dadosAtualizados);
    await this.CarrinhoRepository.remove(carrinho);
  }

}

