import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../Ipensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Array<IPensamento> = [
//    {
//    id: 0,
//    conteudo: 'Passo informações para o componente filho',
//    autoria: 'Componenete pai',
//    modelo: 'modelo3'
//  },
//  {
//    id: 1,
//    conteudo: 'Minha propriedade é decorada com @Input',
//    autoria: 'Componente filho',
//    modelo: 'modelo1'
//  },
//  {
//    id: 2,
//    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta congue dapibus. Vivamus pulvinar tempus nisl a bibendum. Cras est justo, aliquam luctus neque ut, porttitor tempor lacus. Proin id augue euismod, dignissim elit vitae, congue mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
//    autoria: 'Lorem Ipsum',
//    modelo: 'modelo2'
//  }

];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {

    this.service.listar().subscribe( (listapensamentoOBS) => {
      this.listaPensamentos = listapensamentoOBS;
    }
    );


  }

}
