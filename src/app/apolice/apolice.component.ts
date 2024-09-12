import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nome: string = '';
  numeroApolice: string = '';
  resultado: string = '';

  consultarApolice() {
    this.resultado = `Apólice de ${this.nome} com o número ${this.numeroApolice} foi consultada.`;
  }
}
