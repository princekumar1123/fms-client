import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagementService } from 'src/app/services/state-management.service';
import Chart from 'chart.js/auto';


interface ICardData {
  name: string,
  count: string,
  color: string,
  icon: string
}

interface IOrderList {
  orderNo?: number;
  customerName: string;
  deliveryDate: string;
  ETA: number | null;
  city: string;
  orderStatus: string;
  paymentStatus: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tableColumnData: any[] = [
    { id: 1, field: 'orderNo', text: 'Order No' },
    { id: 2, field: 'customerName', text: 'Customer Name' },
    { id: 3, field: 'deliveryDate', text: 'Delivery date' },
    { id: 4, field: 'ETA', text: 'ETA' },
    { id: 5, field: 'city', text: 'City' },
    { id: 6, field: 'orderStatus', text: 'Order Status' },
    { id: 7, field: 'paymentStatus', text: 'Payment Status' },
  ];

  OrderList: any[] = [
    { orderNo: '001', customerName: 'Alice', deliveryDate: '2025-04-01', ETA: '10:00 AM', city: 'New York', orderStatus: 'Delivered', paymentStatus: 'Paid' },
    { orderNo: '002', customerName: 'Bob', deliveryDate: '2025-04-01', ETA: '11:00 AM', city: 'Los Angeles', orderStatus: 'Pending', paymentStatus: 'Unpaid' }
  ];
  // constructor(private router: Router) {}
  // navi() {
  //   const dataToSend = { id: 123, name: 'Prince', role: 'Developer' }; 
  //   this.router.navigate(['/order'], { state: { data: dataToSend } });
  // }

  userData: ICardData[] = [{ name: "Manifests", count: "116", color: "#00C0EF", icon: "bi bi-file-earmark-ruled-fill h1" },
  { name: "Orders", count: "3", color: "#00A65A", icon: "bi bi-cart4 h1" },
  { name: "Drivers", count: "31", color: "#F39C12", icon: "bi bi-phone h1" },
  { name: "Customers", count: "37", color: "#D9534F", icon: "bi bi-people h1" },
  { name: "Pending Orders", count: "93", color: "#A957C5", icon: "bi bi-clock-history h1" },
  { name: "Delivered Orders", count: "3", color: "#F25DF6", icon: "bi bi-truck h1" },
  { name: "Delivered (Inside)", count: "1", color: "#B77B7B", icon: "bi bi-hourglass-split h1" },
  { name: "Delivered (Outside)", count: "0", color: "#0089A6", icon: "bi bi-hourglass-bottom h1" }
  ]
  barChart!: any;
  pieChart!: any;
  page = 1;
  pageSize = 4;
  collectionSize = this.OrderList.length;
  orderList!: IOrderList[];
  sidebarStatus: boolean = false;
  constructor(private stateMagagementRef: StateManagementService) {
    this.stateMagagementRef.sideBarStatus().subscribe(
      (status: boolean) => {
        this.sidebarStatus = status;
        console.log('Sidebar status updated:', this.sidebarStatus);
      }
    );
    this.refreshCountries();

  }
  refreshCountries() {
    this.orderList = this.OrderList.map((data, i) => ({ id: i + 1, ...data })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  ngAfterViewInit(): void {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
          label: '# of Delivered Manifests',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Delivered Manifest Chart'
          }
        }
      }
    });

    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Delivered', 'Undelivered'],
        datasets: [{
          label: '% of Delivered Orders',
          data: [80, 20],
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Delivered Orders Pie Chart'
          }
        }
      }
    });
  }
}
