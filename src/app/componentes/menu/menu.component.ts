import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  quantidade: number;

  constructor(
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinho.getQuantidadeItens().subscribe((q) => {
      console.log('Recebendo nova quantidade de itens pelo cano ' + q);
      this.quantidade = q;
    });
  }

}
