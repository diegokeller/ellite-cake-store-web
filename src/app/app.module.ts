import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
