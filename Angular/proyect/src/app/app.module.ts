import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HealthyComponent } from './lading-page/healthy/healthy.component';
import { FeedingComponent } from './lading-page/feeding/feeding.component';
import { FirstImageComponent } from './lading-page/first-image/first-image.component';
import { BenefitsComponent } from './lading-page/benefits/benefits.component';
import { HomeComponent } from './lading-page/home/home.component';
import { RoutinesComponent } from './lading-page/routines/routines.component';
import { ProfileComponent } from './profile/profile.component';
import { FoodsessionComponent } from './Foods/foodsession/foodsession.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthyComponent,
    FeedingComponent,
    FirstImageComponent,
    BenefitsComponent,
    HomeComponent,
    RoutinesComponent,
    ProfileComponent,
    FoodsessionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
