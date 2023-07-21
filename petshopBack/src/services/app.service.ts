import { Injectable } from '@nestjs/common';
import { Usuario } from '../entities/Usuario';
import { Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO } from 'src/DTO/LoginDTO';
import  { compare, compareSync } from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Usuario)
    private UsuarioRepository: Repository<Usuario>,
  ) {}

  async salvarDados(dados: Usuario): Promise<Usuario> {
    const usuario = this.UsuarioRepository.create(dados);
    
    await this.UsuarioRepository.save(usuario);
    return usuario;
  }
  
  async listarUsuariosEsp(id: number): Promise<Usuario> {
    const usuario = await this.UsuarioRepository.findOne({where:{id}});
    if (!usuario) {
      throw new Error('Usuario não encontrado');
    }
    return usuario;
  }
  async listarUsuarios(): Promise<Usuario[]> {
    return this.UsuarioRepository.find();
  }
  async atualizarUsuarios(id: number, dadosAtualizados: Partial<Usuario>): Promise<Usuario> {
    const usuario = await this.UsuarioRepository.findOne({where:{id}});
    if (!usuario) {
      throw new Error('Usuario não encontrado');
    }

  Object.assign(usuario, dadosAtualizados);

    return await this.UsuarioRepository.save(usuario);
  }
  async deletarUsuarios(id: number, dadosAtualizados: Partial<Usuario>): Promise<void> {
    const usuario = await this.UsuarioRepository.findOne({where:{id}});
    if (!usuario) {
      throw new Error('Aluno não encontrado');
    }
    Object.assign(usuario, dadosAtualizados);
    await this.UsuarioRepository.remove(usuario);
  }
  async login(dados: LoginDTO): Promise<Usuario> {
    const email = dados.email
    const senha = dados.senha

    const usuario = await this.UsuarioRepository.findOne({where:{email}});
    if (!usuario) {
      throw new Error('Usuario não encontrado');

    } 
    //console.log(dados.senha)
    const senhaA = compare(dados.senha, usuario.senha)
    if(senha){
    return usuario;
    }
  
  }
}

