import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import {PostsModule} from "./components/posts/posts.module";
import { TopModule } from './components/top/top.module';
import { TrendingModule } from './components/trending/trending.module';
import { RutaInicioComponent } from './routes/ruta-inicio/ruta-inicio.component';
import { RutaNotFoundComponent } from './routes/ruta-not-found/ruta-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    TrendingModule,
    NavbarModule,
    TopModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
