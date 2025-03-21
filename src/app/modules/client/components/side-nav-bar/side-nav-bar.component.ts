// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { StateManagementService } from 'src/app/services/state-management.service';

// @Component({
//   selector: 'app-side-nav-bar',
//   templateUrl: './side-nav-bar.component.html',
//   styleUrls: ['./side-nav-bar.component.scss']
// })
// export class SideNavBarComponent {
//   isCollapsed = false;
//   activeItem = 'home';

//   constructor(
//     private stateManagementServiceRef:StateManagementService,
//     private router: Router){

//   }

//   toggleSidebar(): void {
//     this.isCollapsed = !this.isCollapsed;
//     // this.stateManagementServiceRef.setSidebarStatus(this.isCollapsed)
//     this.stateManagementServiceRef.sideBarStatus().subscribe((status: boolean) => {
//       this.sideBarStatus = status;
//     });
//   }

//   // setActiveItem(item: string): void {
//   //   this.activeItem = item;
//   // }

//   navigateTo(route: string, item: string) {
//     this.activeItem = item; 
//     this.router.navigate([route]); 
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from 'src/app/services/state-management.service'; // adjust path as needed

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {
  isCollapsed = false;
  activeItem = 'dashboard';

  constructor(
    private router: Router,
    private stateManagementServiceRef: StateManagementService
  ) {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;

    // 🔄 Update global state when sidebar is toggled
    this.stateManagementServiceRef.setSidebarStatus(this.isCollapsed);
  }

  navigateTo(route: string, item: string): void {
    this.activeItem = item;
    this.router.navigate([route]);
  }
}
