import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CaasService } from '../shared/caas.service';
import { Cart } from '../shared/cart';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  cartId: string = '';
  state: string = '';
  productId: string = '';
  carts: Cart[] = [];
  addtoCartId: string = '';
  orderId: string = '';

  constructor(
    private caasService: CaasService,
    public modalRef: MdbModalRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    if (this.state == 'addToCart') {
      this.caasService.getCartsByUserId('1').subscribe((res) => {
        this.carts = res;
      });
    }
  }

  deleteCart(cartId: string): void {
    this.caasService.deleteCart(cartId).subscribe(() => {
      window.location.reload();
    });
  }

  checkoutCart(cartId: string): void {
    this.caasService.checkoutCart(cartId).subscribe(() => {
       this.caasService.getLastOrderOfUser('1').subscribe((res) => {
         this.orderId = res.idOrder!;
         alert('Your order id is: ' + this.orderId);
         this.reload();
       });
    });
  }

  reload() {
      window.location.reload();
  }

  onChange(e: any){
      this.addtoCartId = e.target.value;
  }

  addToCart() {
   this.caasService.addToCart(this.addtoCartId,this.productId).subscribe(() => { window.location.reload(); });
  }

}
