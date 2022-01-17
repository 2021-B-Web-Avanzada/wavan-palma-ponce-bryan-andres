import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInicioComponent } from './routes/ruta-inicio/ruta-inicio.component';
import {RutaNotFoundComponent} from "./routes/ruta-not-found/ruta-not-found.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
