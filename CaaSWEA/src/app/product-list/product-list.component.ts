import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { CaasService } from '../shared/caas.service';
import { Product } from '../shared/product';

@Component({
  selector: 'wea5-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent {
   products: Product[] = [];
   modalRef: MdbModalRef<ModalComponent> | null = null;
   constructor(private route: ActivatedRoute,
      private caasService: CaasService,
      private router: Router,
      private modalService: MdbModalService) { }

   ngOnInit(): void {
      if(this.route.snapshot.params['fts'] != null){
         this.route.params.subscribe(params =>
            this.caasService.getSearchedProductsInShop(params['id'],params['fts']).subscribe(res => {
               this.products = res;
            }));
      } else {
         this.route.params.subscribe(params =>
            this.caasService.getProductsByShopId(params['id']).subscribe(res => {
               this.products = res;
            }));
      }
   }

   @Output() showDetailsEvent = new EventEmitter<Product>();
   showDetails(prod: Product) {
      this.showDetailsEvent.emit(prod);
   }

   addToCart(cart:string,prod: string) {
      this.caasService.addToCart(cart,prod).subscribe(() => { window.location.reload(); });
   }

   openAddToCartModal(id : string) {
      this.modalRef = this.modalService.open(ModalComponent, {
        data: { productId: id,
                state: "addToCart" },
      });
    }

   routeToProductDetail(id: string) {
      this.router.navigate(['/shop/1/products/',id]);
      console.log("clicked");
   }
}
