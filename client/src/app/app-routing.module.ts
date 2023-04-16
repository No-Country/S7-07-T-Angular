import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        loadComponent: ()=> import('./layout/home/home.component'),
      },
      {
        path:'alimentacion',
        loadComponent: ()=> import('./layout/foods/foods.component')
      },{
        path:'historial',
        loadComponent: ()=> import('./layout/record/record.component')
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
