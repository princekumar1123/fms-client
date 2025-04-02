import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from 'src/app/services/state-management.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  tableColumnData: any[] = [
    { id: 1, field: 'orderNo', text: 'Order No' },
    { id: 2, field: 'customerName', text: 'Customer Name' },
    { id: 3, field: 'deliveryDate', text: 'Delivery date' },
    { id: 4, field: 'ETA', text: 'ETA' },
    { id: 5, field: 'city', text: 'City' },
    { id: 6, field: 'orderStatus', text: 'Order Status' },
    { id: 7, field: 'paymentStatus', text: 'Payment Status' },
  ];

  sidebarStatus: boolean = false;
  constructor(private stateMagagementRef: StateManagementService) {
    this.stateMagagementRef.sideBarStatus().subscribe(
      (status: boolean) => {
        this.sidebarStatus = status;
        console.log('Sidebar status updated:', this.sidebarStatus);
      }
    );
  }

  receivedData: any;

  // constructor(private router: Router) {
  //   console.log(this.router.getCurrentNavigation()); 

  //   const navigation = this.router.getCurrentNavigation();
  //   this.receivedData = navigation?.extras.state?.['data']; 
  //   console.log(this.receivedData);
  // }
}
