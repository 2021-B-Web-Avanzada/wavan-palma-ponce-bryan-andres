import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInicioComponent } from './routes/ruta-inicio/ruta-inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
