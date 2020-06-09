import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.scss']
})
export class DetalheProdutoComponent implements OnInit {

  produto: any;
  carregando: boolean;

  constructor(
    private api: CakeStoreApiService,
    private route: ActivatedRoute,
    private carrinho: CarrinhoService
  ) {
    this.carregando = true;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.api.getProduto(id).subscribe((result) => {
      this.produto = result.produto;
      this.carregando = false;
    });
  }

  adicionarNoCarrinho() {
    console.log('Adicionando produto ao carrinho');
    this.carrinho.adicionar(this.produto);
  }

}
