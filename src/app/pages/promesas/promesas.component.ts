import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
  //  Promesa para que se ejecute y termine en 3 segundos
    let promesa = new Promise((resolve, reject) => {
    let contador = 0;

      //  Cuando el contador llegue a 3 pues muere, eso hace el intervalo que agregammos mejor
      let intervalo = setInterval(() => {
          contador += 1;
          console.log(contador);
          if (contador === 3) {
            reject('Simplemente murio');
            clearInterval(intervalo);
          }
      }, 1000);
    });
    promesa.then(
      () => console.log('Termino la promesa')
    ).catch(error => console.error('error de la promesa', error));
  }

  ngOnInit() {
  }

}
