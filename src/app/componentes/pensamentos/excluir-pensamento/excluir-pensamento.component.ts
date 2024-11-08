import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../Ipensamento';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {


  pensamento : IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // como se fosse uma captura instantanea
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    if (this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
      this.router.navigate(['/listarPensamento']);
    })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
