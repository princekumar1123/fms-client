// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StateManagementService {

//   // private __sideBarStatus = signal<boolean>(false);
//   private __sideBarStatus = signal<boolean>(false);


//   // Return the signal value directly (no subscribe needed)
//   sideBarStatus():any {
//     return this.__sideBarStatus;
//   }

//   // Set the sidebar status via signal
//   setSidebarStatus(status: boolean) {
//     this.__sideBarStatus.set(status); // Update the signal value
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  private __sideBarStatus$ = new BehaviorSubject<boolean>(false);

  sideBarStatus(): Observable<boolean> {
    return this.__sideBarStatus$.asObservable();
  }

  setSidebarStatus(status: boolean): void {
    this.__sideBarStatus$.next(status);
  }

  getSidebarStatusValue(): boolean {
    return this.__sideBarStatus$.getValue();
  }
}
