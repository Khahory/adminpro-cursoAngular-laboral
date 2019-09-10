import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // Variables
  @Input() private progreso: number = 60; // Decorador que funciona para enviarlo al compo del padre (progress)
  @Input() private leyenda: string = 'Leyenda'; // @Input(alias del atributo)

  //        nombreEvento        Tipo evento       Inicializamos
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.warn(60, this.progreso);
    console.warn('Leyenda', this.leyenda);
  }

  private cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso); // El evento emitira este valor number
  }

}
