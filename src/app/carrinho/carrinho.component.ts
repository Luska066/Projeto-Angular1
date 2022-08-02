import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho:IProdutoCarrinho[] = []
  total=0;
  constructor(public carrinhoService:CarrinhoService, private notificacaoService: NotificacaoService,private router:Router) { }



  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculoTotal();
  }

  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculoTotal();
  }

  calculoTotal(){
    this.total = this.itensCarrinho.reduce(( prev , curr) => prev+(curr.preco * curr.quantidade), 0);
  }

  comprar(){
    this.notificacaoService.notificar("Compra Realizada Com Sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
