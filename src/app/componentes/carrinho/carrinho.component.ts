import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  itens: any[];

  constructor(
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinho.getCanoIten().subscribe(i => this.itens = i);
  }

  removerItem(id: number) {
    this.carrinho.removerItem(id);
  }

}
