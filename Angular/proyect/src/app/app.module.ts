import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/navbar/shared.module';
<<<<<<< HEAD
import { InicioComponent } from './landing-page/inicio/inicio.component';
import { HomeComponent } from './landing-page/home/home.component';
import { SaludableComponent } from './landing-page/saludable/saludable.component';
import { AlimentacionComponent } from './landing-page/alimentacion/alimentacion.component';
import { HealthyComponent } from './lading-page/healthy/healthy.component';
import { FeedingComponent } from './lading-page/feeding/feeding.component';
import { FirstImageComponent } from './lading-page/first-image/first-image.component';
=======
import { FooterComponent } from './shared/footer/footer.component';
import { RoutinesComponent } from './lading-page/routines/routines.component';
import { BenefitsComponent } from './lading-page/benefits/benefits.component';
>>>>>>> c56b4927b3d190434d1e86ef07223f998c8f5be1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InicioComponent,
    HomeComponent,
    SaludableComponent,
    AlimentacionComponent,
    HealthyComponent,
    FeedingComponent,
    FirstImageComponent
=======
    RoutinesComponent,
    BenefitsComponent,
    FooterComponent
>>>>>>> c56b4927b3d190434d1e86ef07223f998c8f5be1
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
