import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number;
  num2: number;
  resultado: number;
  suma() {
    this.resultado = this.num1 + this.num2;
  }
  resta() {
    this.resultado = this.num1 - this.num2;
  }
  multiplicacion() {
    this.resultado = this.num1 * this.num2;
  }
  division() {
    this.resultado = this.num1 / this.num2;
  }
}
