import { Component, OnInit } from '@angular/core';
import { CakeStoreApiService } from 'src/app/servicos/cake-store-api.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: any[];

  constructor(
    private api: CakeStoreApiService
  ) { }

  ngOnInit(): void {
    this.api.getProdutos().subscribe(result => this.produtos = result.produtos);
  }

}
