import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../Ipensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamentoFoo : IPensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamentoFoo.conteudo.length >=256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
