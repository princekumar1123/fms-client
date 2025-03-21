import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';

// const routes: Routes = [{
//   path: "", component: ClientComponent,
// },
// {
//   path: "dashboard", component: DashboardComponent
// }]

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'order', component: OrderComponent }
    ]
  }
];



@NgModule({
  declarations: [
    ClientComponent,
    SideNavBarComponent,
    TopMenuBarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routes)

  ]
})
export class ClientModule { }
