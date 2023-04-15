import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import  HomeComponent  from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'inicio'
      },

      // ejemplo de usar router
      {
        path:'inicio',
        loadComponent: ()=> import('./home/home.component'),
      },
      {
        path:'alimentacion',
        loadComponent: ()=> import('./Foods/foodsession/foodsession.component')
      },
    ]

  },
  // {
  //   path: '/profile',
  //   component: ProfileComponent,
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
