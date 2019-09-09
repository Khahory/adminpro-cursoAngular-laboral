// Creando mi primer modulo para exportarlo en el modulo principal
import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  exports: [    // La exportamos porque requerimos estos componente en otrod componente que no estan aqui
    DashboardComponent, // Ej: si solo usaramos 'Graficas1' en 'Dashboard o Progress'
    ProgressComponent,  // Pues exportarla no tendria sentido
    Graficas1Component
  ]
})
export class PagesModule {
}
