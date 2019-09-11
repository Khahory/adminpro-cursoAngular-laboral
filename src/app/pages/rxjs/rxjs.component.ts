import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    let obs = new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador == 2) {
          observer.error('Error, ayudaa!!'); //  Esto hara que el obs termine de golpe .error()
        }
      }, 1000);
    });

    obs.subscribe(
      numero => console.log('Sub:', numero),
      error => console.error('Error en el obs', error),
      () => console.log('el observador termino')
      );
  }

  ngOnInit() {
  }

}
