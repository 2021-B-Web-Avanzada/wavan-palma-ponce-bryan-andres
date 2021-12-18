import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaAppComponent} from './rutas/ruta-app/ruta-app.component';
import {RutaForbiddenComponent} from './rutas/ruta-forbidden/ruta-forbidden.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaNotFoundComponent} from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import {RutaUsuarioComponent} from './rutas/ruta-usuario/ruta-usuario.component';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import { EstaLogeadoGuard } from './rutas/servicios/auth/esta-logeado.guard';
import { EsAdministradorGuard } from "./rutas/servicios/auth/es-administrador.guard";

const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,
    canActivate:[EstaLogeadoGuard],
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  {
    path: 'app',
    component: RutaAppComponent,
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent
      },
      {
        path:'post',
        component:RutaPostComponent,
        canActivate: [EsAdministradorGuard]
      },
      {
        path:'inicio',
        component:RutaInicioComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
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
export class AppRoutingModule {
}
