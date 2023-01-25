import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartsComponent } from './carts/carts.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { StatsComponent } from './stats/stats.component';

// Logout / 
// Zeiten bei Statistik kann man nicht ändern / 
// Shop hinzufügen aufgrund von Backend anders implementiert /  
//Discounts hinzufügen 25% / 
//Daten nicht sprächend /
// Ids bei Carts /

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop/1',
    pathMatch: 'full',
  },
  {
    path: 'index.html',
    redirectTo: 'shop/1',
    pathMatch: 'full',
  },
  {
    path: 'shop/:id',
    component: ShopInfoComponent,
  },
  {
    path: 'shop/:id/products',
    component: ProductListComponent,
  },
  {
    path: 'shop/:id/products/searchFor/:fts',
    component: ProductListComponent,
  },
  {
    path: 'shop/:id/products/:idProduct',
    component: ProductDetailsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [CanNavigateToAdminGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user/:userId/carts',
    component: CartsComponent,
  },
  {
    path: 'user/:userId/carts/:cartId',
    component: CartItemComponent,
  },
  {
    path: 'user/:userId/carts/:cartId/products',
    component: ProductItemComponent,
  },
  {
    path: 'user/:userId/orders',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
