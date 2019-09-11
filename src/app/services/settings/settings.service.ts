import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class SettingsService {
  ajustes: Ajustes = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  }
  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes(); // Con injectalo en el app.component pues ya basta con porner esto aqui
  }

  guardarajuste() {
    // Guaardar json en memoria local
    console.log('Guadando en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del localStorage');

      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('Usando calores por defecto');
    }
  }

  aplicarTema(tema: string) {
    console.log(tema);
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    // Guardar esos cambios
    this.guardarajuste();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
