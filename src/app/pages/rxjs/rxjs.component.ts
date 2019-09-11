import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  // Varaibles
  subscription: Subscription;

  constructor() {

    //  Para poder sacar el metodo unsubscribe
    this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Sub:', numero),
      error => console.error('Error en el obs', error),
      () => console.log('el observador termino')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Se destruyo el componente rxjs');
    this.subscription.unsubscribe();
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
