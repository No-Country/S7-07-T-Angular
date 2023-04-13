import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  HomeComponent  from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
=======
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
      },
      {
        path:'home',
        loadComponent: ()=> import('./home/home.component'),
      },
      // ejemplo de usar router
      {
        path:'inicio',
        loadComponent: ()=> import('./components/footer/footer.component'),
      }
    ]
>>>>>>> 3de0c27bea4db1ba4416253382de1d262ef77805
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
