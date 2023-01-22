import { Component } from '@angular/core';
import { CaasService } from '../shared/caas.service';

@Component({
  selector: 'div.wea5-stats',
  templateUrl: './stats.component.html',
  styles: [
  ]
})
export class StatsComponent {
   data: any;
   data2: any;
   totalCarts: string = "";
   constructor(private caasService: CaasService) { }
   ngOnInit(): void {
      //avg sales per month in shop for year 2021 & 2022
      this.caasService.findavgsalespermonthinshopForYear("1", "2021").subscribe((data) => {
         this.caasService.findavgsalespermonthinshopForYear("1", "2022").subscribe((data2) => {
            this.data = {
               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
               datasets: [
                   {
                       label: 'Year 2021',
                       data: data
                   },
                   {
                       label: 'Year 2022',
                       data: data2
                   }
               ]
           }
         });
      });
      //end of avg sales per month in shop for year 2021 & 2022
      this.caasService.findAvgSalesPerYearInShop("1","2021").subscribe((data) => {
         this.caasService.findAvgSalesPerYearInShop("1","2022").subscribe((data2) => {
            console.log(data.res);
            this.data2 = {
               datasets: [
                   {
                       label: 'Year 2021',
                       data: data
                   },
                   {
                       label: 'Year 2022',
                       data: data2
                   }
               ]
           }
         });
      });
      //end
      this.caasService.findTotalCarts("1").subscribe((data) => { this.totalCarts = data.res!;});
   }
}
