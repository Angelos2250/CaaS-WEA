import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Product } from '../shared/product';

@Component({
  selector: 'div.wea5-product-item',
  templateUrl: './product-item.component.html',
  styles: [
  ]
})
export class ProductItemComponent {
   products : Product[] = [];
   @Input() cartId: string = "";
   constructor(private caasService: CaasService,private router: Router) { }
   
   ngOnInit(): void {
         this.caasService.getProductsByCartId(this.cartId).subscribe(res => {
            this.products = res;
      });
   }

   getTotalPrice(v1:number,v2:number): number {
      return v1*v2;
   }

   deleteProduct(cartId: string, prductId: string): void {
        this.caasService.deleteProductFromCart(cartId,prductId).subscribe(() => {
        window.location.reload();
      });
    }
   
   updateQtyOfCart(cartId: string, prductId: string, qty: any): void {
      this.caasService.updateQtyOfProductInCart(cartId,prductId,qty.target.value).subscribe(() => {
         window.location.reload();
      });
   }
}