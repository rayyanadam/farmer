import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  n:number = 1;
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.http.get<any>('http://localhost:3000/api/v1/order').subscribe(
      (response) => {
        this.orders = response.orders;
      },
      (error) => {
        console.error('Error retrieving order data:', error);
      }
    );
  }
}
