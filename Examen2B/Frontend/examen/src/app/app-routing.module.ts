import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaJuegoComponent} from "./routes/ruta-juego/ruta-juego.component";



const routes: Routes = [
  {
    path: 'juego/:salaId/:username',
    component: RutaJuegoComponent
  },
  {
    path: '**',
    redirectTo: '/juego/1/andres',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
