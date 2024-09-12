import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number = 0;

  calcularApolice() {
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.valorApolice = this.valorAutomovel * 0.15;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.valorApolice = this.valorAutomovel * 0.10;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}
