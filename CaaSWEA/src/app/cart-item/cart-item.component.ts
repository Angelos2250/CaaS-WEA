import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { CaasService } from '../shared/caas.service';
import { Cart } from '../shared/cart';
import { Result } from '../shared/result';

@Component({
  selector: 'div.wea5-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [],
})
export class CartItemComponent {
  @Input() cart: Cart = new Cart();
  price: Result = new Result();
  discount: string = '0';
  total: string = '0';
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private route: ActivatedRoute,
    private caasService: CaasService,
    private modalService: MdbModalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.caasService
        .getPriceOfCartByCartId(this.cart.idCart!)
        .subscribe((res) => {
          this.price = res;
          var str = this.price.res;
          var splitted = str?.split(' ');
          this.discount = splitted![0];
          this.total = splitted![1] ? splitted![1] : '0';
        })
    );
  }
  deleteCart(cartId: string): void {
    this.caasService.deleteCart(cartId).subscribe(() => {
      window.location.reload();
    });
  }

  openDeleteModal() {
   this.modalRef = this.modalService.open(ModalComponent, {
     data: { cartId: this.cart.idCart,
            state: "delete" },
   });
 }

 openCheckOutModal() {
   this.modalRef = this.modalService.open(ModalComponent, {
     data: { cartId: this.cart.idCart,
            state: "confirm" },
   });
 }
}
