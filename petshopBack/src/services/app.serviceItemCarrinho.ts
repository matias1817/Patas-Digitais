import { Injectable } from '@nestjs/common';
import { ItemCarrinho } from '../entities/ItemCarrinho';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppServiceItemCarrinho {
  constructor(
    @InjectRepository(ItemCarrinho)
    private ItemCarrinhoRepository: Repository<ItemCarrinho>,
  ) {}

  async salvarDados(dados: ItemCarrinho): Promise<ItemCarrinho> {
    const itemCarrinho = this.ItemCarrinhoRepository.create(dados);
    
    await this.ItemCarrinhoRepository.save(itemCarrinho);
    return itemCarrinho;
  }
  
  async listarItemCarrinhosEsp(id: number): Promise<ItemCarrinho> {
    const itemCarrinho = await this.ItemCarrinhoRepository.findOne({where:{id}});
    if (!itemCarrinho) {
      throw new Error('ItemCarrinho não encontrado');
    }
    return itemCarrinho;
  }
  async listarItemCarrinhos(): Promise<ItemCarrinho[]> {
    return this.ItemCarrinhoRepository.find();
  }
  async atualizarItemCarrinhos(id: number, dadosAtualizados: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
    const itemCarrinho = await this.ItemCarrinhoRepository.findOne({where:{id}});
    if (!itemCarrinho) {
      throw new Error('ItemCarrinho não encontrado');
    }

  Object.assign(itemCarrinho, dadosAtualizados);

    return await this.ItemCarrinhoRepository.save(itemCarrinho);
  }
  async deletarItemCarrinhos(id: number, dadosAtualizados: Partial<ItemCarrinho>): Promise<void> {
    const itemCarrinho = await this.ItemCarrinhoRepository.findOne({where:{id}});
    if (!itemCarrinho) {
      throw new Error('ItemCarrinho não encontrado');
    }
    Object.assign(itemCarrinho, dadosAtualizados);
    await this.ItemCarrinhoRepository.remove(itemCarrinho);
  }

}

