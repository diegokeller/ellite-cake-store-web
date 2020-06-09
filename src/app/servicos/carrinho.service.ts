import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: any[];

  constructor() {
    this.itens = new Array();
  }

  adicionar(produto: any) {
    console.log(`Adicionando produto ao carrinho ${produto.nome}`);
    this.itens.push(
      {
        quantidade: 1,
        produto: produto
      }
    );
    console.log('Carrinho');
    console.log(this.itens);
  }

}
