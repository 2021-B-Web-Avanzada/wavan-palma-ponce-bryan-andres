import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
