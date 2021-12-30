import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaBodegasComponent } from './rutas/ruta-bodegas/ruta-bodegas.component';

const routes: Routes = [
  {
    path:'bodega',
    component: RutaBodegasComponent
  },
  {
    path:'reporte',
    component:RutaBodegasComponent
  },
  {
    path:'',
    redirectTo:'bodega',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloInventarioRoutingModule { }
