import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarATres().then(
      mensaje => console.log(mensaje, 'Ok')
    ).catch(error => console.error('error de la promesa', error));
  }

  ngOnInit() {
  }

  // @ts-ignore
  private contarATres(): Promise<boolean> {
    //  Promesa para que se ejecute y termine en 3 segundos
    return new Promise((resolve, reject) => { //resolve = salio bien, reject = salio mal
      let contador = 0;

      //  Cuando el contador llegue a 3 pues muere, eso hace el intervalo que agregammos mejor
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          reject(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
