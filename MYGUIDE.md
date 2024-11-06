# Personal Guide

## Gerar um novo service
ng generate component [caminho partindo_do_app_do_projeto]/nome_componentes
ng g c [caminho partindo_do_app_do_projeto]/nome_componentes
Ex: 

## Gerar um novo componente
ng generate component [caminho partindo_do_app_do_projeto]/nome_componentes
ng g c [caminho partindo_do_app_do_projeto]/nome_componentes
Ex: 
S606255673@serpro-2003165 MINGW64 ~/treinamentos-alura/memoteca (master)
$ ng g c componentes/pensamentos/criar-pensamento

## Executar a aplicaçao
ng serve

Diretivas estruturais - para modificar elementos do HTML
*ngFor
*ngIf
ngClass - mudar a classe de um item html


Elementos do angular
<ng-template #name></ng-template>  



Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.

Ex: <app-listarPensamentos>.

Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.

Ex: NgIf, NgFor. NgSwitch.

Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Ex: NgClass, NgStyle.


--
ngOnInit() = usado para chamar todos os métodos que vc quer que rode assim que o componente for 
chamado. Toda a lógica usada pelo componente ao ser carregado
