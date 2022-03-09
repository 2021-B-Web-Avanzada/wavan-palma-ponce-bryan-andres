import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SocketIoModule} from 'ngx-socket-io';
import {RutaJuegoComponent} from "./routes/ruta-juego/ruta-juego.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  // Componentes
  declarations: [
    AppComponent,
    RutaJuegoComponent
  ],
  // Modulos Importados
  imports: [
    // app.module.ts
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Template Driven Forms
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbButtonsModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',
      options: {

      }
    })
  ],
  // Servicios
  providers: [
    // AuthService,
  ],
  // Componente principal (aqui es donde empieza toodo)
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
