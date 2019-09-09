import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {RegisterComponent} from './login/register.component';

//  Creando las rutas ------------- Y las rutas hijas
const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     {path: 'dashboard', component: DashboardComponent},
  //     {path: 'progress', component: ProgressComponent},
  //     {path: 'grafica1', component: Graficas1Component},
  //     {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  //   ]
  // },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
]; // Rutas hijas agregadas
//  Tenemos dos router-outlet (pages.comp y app.comp, una ruta funcionara dentro de la otra)
//  pages.comp esta dentro de app.comp

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
