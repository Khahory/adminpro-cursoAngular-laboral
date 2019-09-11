import { Component, OnInit } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {map, retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().subscribe(
      numero => console.log('Sub:', numero),
      error => console.error('Error en el obs', error),
      () => console.log('el observador termino')
      );
  }

  ngOnInit() {
  }

  //Return obs
  private regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador == 2) {
        //   clearInterval(intervalo);
        //   observer.error('Error, ayudaa!!'); //  Esto hara que el obs termine de golpe .error()
        // }
      }, 1000);
    }).pipe(
      map(resp => {   // Map modifica el valor que obtenemos, ejemplo: regadora de flores
                    // el map es la regadora y la info es el agua, la regadora puede modificar el agua
                    // a neblina, chorro fuerte o suave

        return resp.valor;
      })
    );

  }
}
