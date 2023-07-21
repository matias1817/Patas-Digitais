import { Injectable } from '@nestjs/common';
import { Endereco } from '../entities/Endereco';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppServiceEndereco { 
  constructor(
    @InjectRepository(Endereco)
    private EnderecoRepository: Repository<Endereco>,
  ) {}

  async salvarDados(dados: Endereco): Promise<Endereco> {
    const endereco = this.EnderecoRepository.create(dados);
    
    await this.EnderecoRepository.save(endereco);
    return endereco;
  }
  
  async listarEnderecosEsp(idEndereco: number): Promise<Endereco> {
    const endereco = await this.EnderecoRepository.findOne({where:{idEndereco}});
    if (!endereco) {
      throw new Error('Endereco não encontrado');
    }
    return endereco;
  }
  async listarEnderecos(): Promise<Endereco[]> {
    return this.EnderecoRepository.find();
  }
  async atualizarEnderecos(idEndereco: number, dadosAtualizados: Partial<Endereco>): Promise<Endereco> {
    const endereco = await this.EnderecoRepository.findOne({where:{idEndereco}});
    if (!endereco) {
      throw new Error('Endereco não encontrado');
    }

  Object.assign(endereco, dadosAtualizados);

    return await this.EnderecoRepository.save(endereco);
  }
  async deletarEnderecos(idEndereco: number, dadosAtualizados: Partial<Endereco>): Promise<void> {
    const endereco = await this.EnderecoRepository.findOne({where:{idEndereco}});
    if (!endereco) {
      throw new Error('Aluno não encontrado');
    }
    Object.assign(endereco, dadosAtualizados);
    await this.EnderecoRepository.remove(endereco);
  }

}

