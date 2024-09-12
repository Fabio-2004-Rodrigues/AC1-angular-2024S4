import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';

// Definindo as rotas
const routes: Routes = [
  { path: '', component: CalcularMediaComponent }, // Rota padrão
  { path: 'media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'apolice', component: ApoliceComponent },
  { path: 'conversor-temperatura', component: ConversorTemperaturaComponent },
  { path: 'imc', component: ImcComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceComponent,
    ConversorTemperaturaComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Incluindo FormsModule para o ngModel funcionar
    NgbModule,
    RouterModule.forRoot(routes) // Incluindo o RouterModule com as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
