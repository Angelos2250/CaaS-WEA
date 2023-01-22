import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CartsComponent } from './carts/carts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ModalComponent } from './modal/modal.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderProductItemComponent } from './order-product-item/order-product-item.component';
import {ToastModule} from 'primeng/toast';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';
import {ChartModule} from 'primeng/chart';
import { AddShopComponent } from './add-shop/add-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopInfoComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoginComponent,
    CartsComponent,
    ProductItemComponent,
    CartItemComponent,
    ModalComponent,
    OrdersComponent,
    OrderProductItemComponent,
    AdminComponent,
    StatsComponent,
    AddShopComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    ToastModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    FormsModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    HttpClientModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
