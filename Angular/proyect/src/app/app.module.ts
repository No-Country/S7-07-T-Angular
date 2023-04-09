import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/navbar/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { RoutinesComponent } from './lading-page/routines/routines.component';
import { BenefitsComponent } from './lading-page/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutinesComponent,
    BenefitsComponent,
    FooterComponent
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
