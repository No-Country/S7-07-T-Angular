import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { PlannersComponent } from './layout/planners/planners.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio',
      },

      // ejemplo de usar router
      {
        path: 'inicio',
        loadComponent: () => import('./layout/home/home.component'),
      },
      {
        path: 'alimentacion',
        loadComponent: () => import('./layout/foods/foods.component'),
      },
      {
        path: 'historial',
        loadComponent: () => import('./layout/record/record.component'),
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'planificar',
        component: PlannersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
