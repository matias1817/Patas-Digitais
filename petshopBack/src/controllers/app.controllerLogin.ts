import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { AppService } from '../services/app.service';
import {Usuario} from '../entities/Usuario';
import { UsuarioEnderecoDTO } from '../DTO/UsuarioEnderecoDTO';
import { Endereco } from '../entities/Endereco';
import { AppServiceEndereco } from '../services/app.serviceEndereco';
import { LoginDTO } from 'src/DTO/LoginDTO';

@Controller('/login')
export class AppControllerLogin {
 
  constructor(private readonly appService: AppService) {}
 
  @Post()
  async login(@Body() dados:LoginDTO) {

    const usuario = await this.appService.login(dados);

    return usuario; 
  }
}
