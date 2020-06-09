import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: any[];

  // Quantidade de itens no carrinho
  quantidadeItens: BehaviorSubject<number> = new BehaviorSubject(0);

  // "Cano" de itens
  canoItens: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    this.itens = this.getItens();
    console.log('Quantidade inicial de itens no carrinho ' + this.itens.length);
    this.quantidadeItens.next(this.itens.length);
    this.canoItens.next(this.itens);
  }

  adicionar(produto: any) {
    console.log(`Adicionando produto ao carrinho ${produto.nome}`);
    let aumentou = false;
    this.itens.forEach((i) => {
      if (i.produto.id === produto.id) {
        i.quantidade += 1;
        aumentou = true;
        console.log('Aumentou quantidade para ' + i.quantidade);
      }
    });
    if (!aumentou) {
      this.itens.push(
        {
          quantidade: 1,
          produto
        }
      );
      console.log('Adicionou');
      console.log('Enviando nova quantidade de itens pelo cano ' + this.itens.length);
      this.quantidadeItens.next(this.itens.length);
    }
    console.log('Carrinho');
    console.log(this.itens);

    // Salvar o carrinho no local storage
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  getItens() {
    const itensString = localStorage.getItem('carrinho');
    if (!itensString) {
      return [];
    }
    return JSON.parse(itensString);
  }

  getCanoIten() {
    return this.canoItens.asObservable();
  }

  getQuantidadeItens(): Observable<number> {
    return this.quantidadeItens.asObservable();
  }

  removerItem(id: number) {
    console.log(`Removendo item ${id}`);

    // Achar o índice do produto no vetor
    const indice = this.itens.findIndex(i => i.produto.id === id);
    console.log(`Indice do produto no vetor ${indice}`);

    // Remover usando o splice
    this.itens.splice(indice, 1);

    // Atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(this.itens));

    // Passa o vetor de itens pelo cano
    this.canoItens.next(this.itens);

    // Atualizar quantidade de itens no carrinho
    console.log('Enviando nova quantidade de itens pelo cano ' + this.itens.length);
    this.quantidadeItens.next(this.itens.length);
  }

}
