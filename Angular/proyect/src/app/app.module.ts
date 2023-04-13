import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module';
// import { HealthyComponent } from './components/healthy/healthy.component';
// import { FeedingComponent } from './components/feeding/feeding.component';
// import { FirstImageComponent } from './components/first-image/first-image.component';
// import { BenefitsComponent } from './components/benefits/benefits.component';
// import  HomeComponent  from './home/home.component';
// import { RoutinesComponent } from './components/routines/routines.component';
// import { ProfileComponent } from './profile/profile.component';
// import { FoodsessionComponent } from './Foods/foodsession/foodsession.component';

@NgModule({
  declarations: [
    AppComponent,
    // HealthyComponent,
    // FeedingComponent,
    // FirstImageComponent,
    // BenefitsComponent,
    // RoutinesComponent,
    // ProfileComponent,
    // FoodsessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
