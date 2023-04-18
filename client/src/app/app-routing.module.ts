import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

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
        loadComponent: () => import('./auth/login/login.component'),
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
