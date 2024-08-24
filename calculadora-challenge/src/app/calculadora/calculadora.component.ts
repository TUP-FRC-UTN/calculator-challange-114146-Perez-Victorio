import { Component } from '@angular/core';
import { BotonesCalculadoraComponent } from '../botones-calculadora/botones-calculadora.component';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [BotonesCalculadoraComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;

  resultado: number = 0;
  
  onClean() {
    this.numero1 = 0
    this.numero2 = 0
  }

  guardarNum1(event: any) {
    this.numero1 = event.target.value;
  }

  guardarNum2(event: any) {
    this.numero2 = event.target.value;
  }

  onChanges(event: number) {
    this.resultado = event;
    console.log(this.resultado);
  }
}
