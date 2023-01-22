import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Product } from '../shared/product';

@Component({
  selector: 'div.wea5-order-product-item',
  templateUrl: './order-product-item.component.html',
  styles: [],
})
export class OrderProductItemComponent {
  products: Product[] = [];
  @Input() orderId: string = '';
  constructor(
    private route: ActivatedRoute,
    private caasService: CaasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.caasService.getProductsInOrder(this.orderId).subscribe((res) => {
      this.products = res;
    });
  }

  getTotalPrice(v1: number, v2: number): number {
    return v1 * v2;
  }

  routeToProductDetail(id: string) {
    this.router.navigate(['/shop/1/products/', id]);
    console.log('clicked');
  }
}
