import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  // Variables
  progreso1: number = 40;
  progreso2: number = 60;
  constructor() { }

  ngOnInit() {
  }

  private actualizarProgress(evento) {
    console.log('Evento: ', evento );
    this.progreso1 = evento;
  }
}


// Soy el padre de Incrementador
