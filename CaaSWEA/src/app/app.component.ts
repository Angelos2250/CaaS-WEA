import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { CaasService } from './shared/caas.service';
import { Discount } from './shared/discount';
import { Shop } from './shared/shop';

@Component({
  selector: 'wea5-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'CaaSWEA';
  shop: Shop = new Shop();
  
  shopState: string = "1";
  shopName: string = "Stracke-Schulist";
   constructor(private route: ActivatedRoute,
               private caasService: CaasService,
               private router: Router,
               private oauthService: OAuthService) { 
                  this.configureWithNewConfigApi();
               }
   ngOnInit(): void {
      const params = this.route.snapshot.params;
      
   }
    private configureWithNewConfigApi() {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    search(e : any) {
      this.router.navigate(['/shop/1/products/searchFor/',e.target.value]);
    }

}
