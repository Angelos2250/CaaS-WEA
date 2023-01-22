import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Product } from '../shared/product';

@Component({
  selector: 'wea5-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent {
   @Input() product: Product = new Product();
   @Output() showListEvent = new EventEmitter<any>();
   constructor(private route: ActivatedRoute,
      private caasService: CaasService,
      private router: Router) { }
   ngOnInit() {
      this.route.params.subscribe(params =>
         this.caasService.getProductById(params['idProduct']).subscribe(res => this.product =
         res));
      }
   showProductList() {
      this.showListEvent.emit();
   }
}
