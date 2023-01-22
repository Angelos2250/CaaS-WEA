import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
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
   modalRef: MdbModalRef<ModalComponent> | null = null;
   constructor(private route: ActivatedRoute,
      private caasService: CaasService,
      private modalService: MdbModalService) { }
   ngOnInit() {
      this.route.params.subscribe(params =>
         this.caasService.getProductById(params['idProduct']).subscribe(res => this.product =
         res));
      }
   showProductList() {
      this.showListEvent.emit();
   }
   openAddToCartModal(id : string) {
      this.modalRef = this.modalService.open(ModalComponent, {
        data: { productId: id,
                state: "addToCart" },
      });
    }
}
