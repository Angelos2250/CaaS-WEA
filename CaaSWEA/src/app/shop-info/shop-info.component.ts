import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaasService } from '../shared/caas.service';
import { Discount } from '../shared/discount';
import { Shop } from '../shared/shop';

@Component({
  selector: 'wea5-shop-info',
  templateUrl: './shop-info.component.html',
  styles: [
  ]
})
export class ShopInfoComponent {
   shop: Shop = new Shop();
   discounts: Discount[] = [];
   constructor(private route: ActivatedRoute,
      private caasService: CaasService,
      private router: Router) { }
   ngOnInit(): void {
      this.route.params.subscribe(params =>
         this.caasService.getShopById(params['id']).subscribe(res => this.shop = res));
      this.route.params.subscribe(params =>
         this.caasService.getDiscountsByShopId(params['id']).subscribe(res => {
            this.discounts = res;
         }));
         
   }

   extractDates(discount: Discount): string {
      let dates = "";
      if (discount.rule?.match("BETWEEN")) {
         let matches: IterableIterator<RegExpMatchArray>;
         const regexp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
         matches = discount.rule.matchAll(regexp);
         dates = " off from " + matches.next().value + " to " + matches.next().value;
      }
      else if (discount.rule?.match("qty")){
         let matches: IterableIterator<RegExpMatchArray>;
         const regexp = / [0-9]*,/g;
         matches = discount.rule.matchAll(regexp);
         dates = "off when buying more then" + matches.next().value + " items";
      }
      return dates;
   }

}
