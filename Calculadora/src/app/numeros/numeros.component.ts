import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numero1: number = 0
  numero2: number = 0
  solucion: number = 0
  n_operacion: number = 0

  public suma(n1: number, n2: number): number {
    this.n_operacion=1
    this.solucion = n1 + n2
    return this.solucion
  }

  public resta(n1: number, n2: number): number {
    this.n_operacion=2
    this.solucion = n1 - n2
    return this.solucion
  }

  public multiplica(n1: number, n2: number): number {
    this.n_operacion=3
    this.solucion = n1 * n2
    return this.solucion
  }

  public divide(n1: number, n2: number): number {
    this.n_operacion=4
    this.solucion = n1 / n2
    return this.solucion
  }

  

}
