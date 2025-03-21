import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "", component: LoginComponent,
},
{
  path: "login", component: LoginComponent
},
{
  path: "register", component: RegisterComponent
}]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
