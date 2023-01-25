import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaasService } from '../shared/caas.service';
import { Shop } from '../shared/shop';
import { ShopCreate } from '../shared/shop-create';

@Component({
  selector: 'div.wea5-add-shop',
  templateUrl: './add-shop.component.html',
  styles: [
  ]
})
export class AddShopComponent {
   @ViewChild('myForm', {static: true}) myForm!: NgForm;
   shop : ShopCreate = new ShopCreate();
   constructor(private cs: CaasService) { }

   submitForm() {
      // TODO Save
      this.shop.idShop = "0";
      this.shop.name = this.myForm.value.name;
      this.shop.appKey = this.myForm.value.appKey;
      this.cs.createShop(this.shop).subscribe(() => {
         this.shop = new ShopCreate();
         this.myForm.reset(this.shop);
         alert("Shop created successfully!")
      });
    }
}
