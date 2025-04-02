import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


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
    TopMenuBarComponent,
    DashboardComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgbPaginationModule,
    RouterModule.forChild(routes)

  ]
})
export class ClientModule { }
