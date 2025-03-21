import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthModule } from './modules/auth/auth.module';

const auth = () => import('./modules/auth/auth.module').then(x => x.AuthModule)
const client = () => import('./modules/client/client.module').then(x => x.ClientModule)

const routes: Routes = [
  {
    path: '',
    loadChildren: client
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
