import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().pipe(
      retry(2) // Numeroes de intentos
    ).subscribe(
      numero => console.log('Sub:', numero),
      error => console.error('Error en el obs', error),
      () => console.log('el observador termino')
      );
  }

  ngOnInit() {
  }

  //Return obs
  private regresaObservable(): Observable<number> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador == 2) {
          clearInterval(intervalo);
          observer.error('Error, ayudaa!!'); //  Esto hara que el obs termine de golpe .error()
        }
      }, 1000);
    });
  }

}
