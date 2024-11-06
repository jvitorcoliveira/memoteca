import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
    /*pode ser prefix ou full
      prefix: a url considerada é só localhost:4200
      full: considera a url toda
    */
  },
  {
  path: 'criarPensamento',
  component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
