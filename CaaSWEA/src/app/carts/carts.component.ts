import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Cart } from '../shared/cart';


@Component({
  selector: 'wea5-carts',
  templateUrl: './carts.component.html',
  styles: [
  ]
})
export class CartsComponent implements OnInit{
   carts : Cart[] = [];
   constructor(private route: ActivatedRoute,
      private caasService: CaasService,
      private router: Router) { }
   
   ngOnInit(): void {
      this.route.params.subscribe(params =>
         this.caasService.getCartsByUserId(params['userId']).subscribe(res => {
            this.carts = res;
      }));
   }

   newCart(): void {
      let cart : Cart = new Cart("0","1");
      this.caasService.newCart(cart).subscribe(() => { window.location.reload();});
   }
}
