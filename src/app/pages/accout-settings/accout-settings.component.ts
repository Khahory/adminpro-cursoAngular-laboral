import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  private cambiarColor(tema: string) {
    console.log(tema);
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

}
