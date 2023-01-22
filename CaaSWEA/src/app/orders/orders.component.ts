import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Order } from '../shared/order';
import { Product } from '../shared/product';

@Component({
  selector: 'wea5-orders',
  templateUrl: './orders.component.html',
  styles: [],
})
export class OrdersComponent {
  orders: Order[] = [];
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private caasService: CaasService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.caasService.getOrdersByUserId('50').subscribe((res) => {
      this.orders = res;
    });
  }
}
