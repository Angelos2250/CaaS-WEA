import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CaasService } from '../shared/caas.service';
import { Discount } from '../shared/discount';

@Component({
  selector: 'div.wea5-add-discount1',
  templateUrl: './add-discount1.component.html',
  styles: [
  ]
})
export class AddDiscount1Component {
   @ViewChild('myForm', {static: true}) myForm!: NgForm;
   discount : Discount = new Discount();
   qty : string = "0";
   appKey : string = "0";
   constructor(private cs: CaasService) { }

   submitForm() {
      // TODO Save
      this.discount.idShop = "1";
      this.discount.rule = "0";
      this.discount.idDiscount = "0";
      this.discount.type = this.myForm.value.inlineRadioOptions;
      this.discount.value = this.myForm.value.value;

    }
}
