import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';

import { AppControllerCarrinho } from './controllers/app.controllerCarrinho';
import { AppControllerProduto } from './controllers/app.controllerProduto';



import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from "./entities/Usuario";
import { Produto } from "./entities/Produto";
import { Carrinho } from "./entities/Carrinho";
import { ItemCarrinho } from "./entities/ItemCarrinho";
import { Endereco } from './entities/Endereco';

import { AppServiceEndereco } from './services/app.serviceEndereco';

import { AppServiceCarrinho } from './services/app.serviceCarrinho';
import { AppServiceItemCarrinho } from './services/app.serviceItemCarrinho';
import { AppServiceProduto } from './services/app.serviceProduto';
import { AppControllerLogin } from './controllers/app.controllerLogin';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Endereco,Carrinho,ItemCarrinho,Produto]),
    TypeOrmModule.forRoot({
      // type:'mysql',
      // host:'localhost',
      // port:3306,
      // username:'aluno',
      // password: 'ifpe2023',
      // database:'web3',
      type: "mysql",
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'januario19541978',
      database: 'web3',
      entities: [ Carrinho, Endereco, ItemCarrinho, Produto, Usuario],
      synchronize: true,
    }),
  ],
  controllers: [AppController, AppControllerCarrinho, AppControllerProduto, AppControllerLogin],
  providers: [AppService, AppServiceEndereco,AppServiceCarrinho, AppServiceItemCarrinho,AppServiceProduto],
})

export class AppModule {}
