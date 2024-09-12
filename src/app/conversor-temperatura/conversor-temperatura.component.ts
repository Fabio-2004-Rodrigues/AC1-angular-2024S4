import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrls: ['./conversor-temperatura.component.css']
})
export class ConversorTemperaturaComponent {
  celsius: number = 0;
  fahrenheit: number = 0;

  converterParaFahrenheit() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }
}
