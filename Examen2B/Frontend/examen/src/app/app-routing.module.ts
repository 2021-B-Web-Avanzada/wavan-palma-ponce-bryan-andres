import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RutaJuegoComponent} from "./routes/ruta-juego/ruta-juego.component";



const routes: Routes = [
  {
    path: '**',
    redirectTo: '/juego',
    pathMatch: 'full'
  },
  {
    path: 'juego',
    component: RutaJuegoComponent
  }
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
