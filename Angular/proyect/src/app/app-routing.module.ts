import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  HomeComponent  from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
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
