import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { AppService } from '../services/app.service';
import {Usuario} from '../entities/Usuario';
import { UsuarioEnderecoDTO } from '../DTO/UsuarioEnderecoDTO';
import { Endereco } from '../entities/Endereco';
import { AppServiceEndereco } from '../services/app.serviceEndereco';
import * as bcrypt from 'bcrypt';

import { LoginDTO } from 'src/DTO/LoginDTO';
import { hash, hashSync } from 'bcrypt';

@Controller('/usuarios')
export class AppController {
 
  constructor(private readonly appService: AppService, private readonly appServiceEndereco: AppServiceEndereco) {}
 
  @Post()
  async salvarDados(@Body() dados:UsuarioEnderecoDTO) {

    const endereco1 = new Endereco()
    endereco1.rua = dados.rua
    endereco1.bairro = dados.bairro
    endereco1.cep = dados.cep
    endereco1.cidade = dados.cidade
    endereco1.numero = dados.numero

  
    const endereco = await this.appServiceEndereco.salvarDados(endereco1);
    
    const usuario1 = new Usuario()

    const saltRounds = 10

   function setPassword (password: string) {
      const passwordHash = hash(password, 10);
      return passwordHash
    }
    
    
    const senhaCripta = await setPassword(dados.senha)


    usuario1.nome = dados.nome
    usuario1.sobrenome = dados.sobrenome
    usuario1.cpf = dados.cpf
    usuario1.dataNasc = dados.dataNasc
    usuario1.email = dados.email
    usuario1.senha = senhaCripta
    usuario1.endereco = endereco
    
    const usuario = await this.appService.salvarDados(usuario1);

    return usuario; 
  }


  @Get()
  async listarUsuarios(): Promise<Usuario[]> {
    return this.appService.listarUsuarios();
  }
  @Get(':id')
  async listarUsuariosEsp(@Param('id') id : number): Promise<UsuarioEnderecoDTO> {
      
    const user = await this.appService.listarUsuariosEsp(id);

    const ende = await this.appServiceEndereco.listarEnderecosEsp(id);

    const DTO = new UsuarioEnderecoDTO;

    DTO.bairro = ende.bairro
    DTO.cep = ende.cep
    DTO.cidade = ende.cidade
    DTO.rua = ende.rua
    DTO.numero = ende.numero
    
    DTO.cpf = user.cpf
    DTO.email = user.email
    DTO.dataNasc = user.dataNasc
    DTO.nome = user.nome
    DTO.sobrenome = user.sobrenome
    DTO.senha = user.senha
    
    return DTO;
  }

  @Put(':id')
  async atualizarUsuarios(@Param('id') id: number, @Body() dados: UsuarioEnderecoDTO): Promise<Usuario> {
    const endereco1 = new Endereco()
    endereco1.rua = dados.rua
    endereco1.bairro = dados.bairro
    endereco1.cep = dados.cep
    endereco1.cidade = dados.cidade
    endereco1.numero = dados.numero

  
    const endereco = await this.appServiceEndereco.atualizarEnderecos(id, endereco1);
    
    const usuario1 = new Usuario()
    usuario1.nome = dados.nome
    usuario1.sobrenome = dados.sobrenome
    usuario1.cpf = dados.cpf
    usuario1.dataNasc = dados.dataNasc
    usuario1.email = dados.email
    usuario1.senha = dados.senha
    usuario1.endereco = endereco
    
    return this.appService.atualizarUsuarios(id, usuario1);
  }
  @Delete(':id')
  async deletarUsuarios(@Param('id') id: number, @Body() dadosAtualizados: Partial<Usuario>): Promise<void> {
    return this.appService.deletarUsuarios(id, dadosAtualizados);
  }

}
