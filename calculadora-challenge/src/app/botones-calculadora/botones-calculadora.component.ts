import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './botones-calculadora.component.html',
  styleUrl: './botones-calculadora.component.css',
})
export class BotonesCalculadoraComponent {
  @Input() valor1: number = 0;
  @Input() valor2: number = 0;

  @Output() outputResultado = new EventEmitter<number>();
  @Output() limpiarValores = new EventEmitter<any>();

  resultado: number = 0;

  sumar() {
    this.resultado = Number(this.valor1) + Number(this.valor2);
    this.outputResultado.emit(this.resultado);
  }

  limpiar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.outputResultado.emit(0)
    this.limpiarValores.emit();
  }
  elevar() {
    this.resultado = Math.pow(Number(this.valor1), Number(this.valor2));
    this.outputResultado.emit(this.resultado);
  }
  dividir() {
    this.resultado = Number(this.valor1) / Number(this.valor2);
    this.outputResultado.emit(this.resultado);
  }
  multiplicar() {
    this.resultado = Number(this.valor1) * Number(this.valor2);
    this.outputResultado.emit(this.resultado);
  }
  restar() {
    this.resultado = Number(this.valor1) - Number(this.valor2);
    this.outputResultado.emit(this.resultado);
  }
}
