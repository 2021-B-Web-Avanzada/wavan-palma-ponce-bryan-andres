import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloInventarioRoutingModule } from './modulo-inventario-routing.module';
import { RutaReporteComponent } from './rutas/ruta-reporte/ruta-reporte.component';
import { RutaBodegasComponent } from './rutas/ruta-bodegas/ruta-bodegas.component';


@NgModule({
  declarations: [
    RutaReporteComponent,
    RutaBodegasComponent
  ],
  imports: [
    CommonModule,
    ModuloInventarioRoutingModule
  ]
})
export class ModuloInventarioModule { }
