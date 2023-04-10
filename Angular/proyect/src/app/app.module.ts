import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/navbar/shared.module';
import { InicioComponent } from './landing-page/inicio/inicio.component';
import { HomeComponent } from './landing-page/home/home.component';
import { SaludableComponent } from './landing-page/saludable/saludable.component';
import { AlimentacionComponent } from './landing-page/alimentacion/alimentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    SaludableComponent,
    AlimentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
