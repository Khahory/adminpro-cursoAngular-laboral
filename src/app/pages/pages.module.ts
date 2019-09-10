// Creando mi primer modulo para exportarlo en el modulo principal
import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';



import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {PAGES_ROUTES} from './pages.routes';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent
  ],
  exports: [    // La exportamos porque requerimos estos componente en otrod componente que no estan aqui
    DashboardComponent, // Ej: si solo usaramos 'Graficas1' en 'Dashboard o Progress'
    ProgressComponent,  // Pues exportarla no tendria sentido
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ]
})
export class PagesModule {
}
