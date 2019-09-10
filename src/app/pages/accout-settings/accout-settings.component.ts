import {Component, Inject, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(public _ajustes: SettingsService ) { }

  ngOnInit() {
  }

  private cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const refe of selectores) {
      refe.classList.remove('working');
    }
    link.classList.add('working');
  }
}
