import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from './cart';
import { Discount } from './discount';
import { Order } from './order';
import { Product } from './product';
import { Result } from './result';
import { Shop } from './shop';
import { ShopCreate } from './shop-create';

@Injectable({
  providedIn: 'root',
})
export class CaasService {
  constructor(private http: HttpClient) {}

  getShopById(id: string): Observable<Shop> {
    return this.http.get<any>(`${environment.server}/shops/2`);
  }

  getDiscountsByShopId(id: string): Observable<Discount[]> {
    return this.http.get<Discount[]>(
      `${environment.server}/discounts/shop/2`
    );
  }

  getProductsByShopId(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.server}/products/shop/2`
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.server}/products/${id}`);
  }

  getCartsByUserId(id: string): Observable<Cart[]> {
    //api/carts/customer/1
    return this.http.get<Cart[]>(`${environment.server}/carts/customer/${id}`);
  }

  getProductsByCartId(id: string): Observable<Product[]> {
    //api/carts/1/products
    return this.http.get<Product[]>(
      `${environment.server}/carts/${id}/products`
    );
  }

  getPriceOfCartByCartId(id: string): Observable<Result> {
    //api/carts/1/price
    return this.http.get<Result>(`${environment.server}/carts/${id}/price`);
  }

  newCart(cart: Cart): Observable<any> {
    //api/carts?customerId=1
    return this.http.post<any>(
      `${environment.server}/carts?customerId=1`,
      cart
    );
  }

  deleteCart(id: string): Observable<any> {
    //api/carts?cartId=17&customerId=1
    return this.http.delete<any>(
      `${environment.server}/carts?cartId=${id}&customerId=1`
    );
  }

  deleteProductFromCart(cartId: string, productId: string): Observable<any> {
    //api/carts/1/removeproduct/1/customer/1
    return this.http.delete<any>(
      `${environment.server}/carts/${cartId}/removeproduct/${productId}/customer/1`
    );
  }

  checkoutCart(cartId: string): Observable<HttpHeaders> {
   //api/carts/checkout/20?customerId=1
   return this.http.post<HttpHeaders>(
     `${environment.server}/carts/checkout/${cartId}?customerId=1`,{observe: 'response' as 'body'})
   }

   addToCart(cartId: string, productId: string): Observable<any> {
      //api/carts/1/addproduct/1?idShop=1&idCustomer=1
      return this.http.post<any>(
        `${environment.server}/carts/${cartId}/addproduct/${productId}?idShop=1&idCustomer=1`,null);
   }

   getOrdersByUserId(id:string): Observable<Order[]> {
      //api/customers/1/orders
      return this.http.get<any>(
        `${environment.server}/customers/${id}/orders`);
   }

   getLastOrderOfUser(id:string): Observable<Order> {
      //api/customers/1/lastorder
      return this.http.get<any>(
        `${environment.server}/customers/${id}/lastorder`);
   }

   
   getProductsInOrder(id:string): Observable<Product[]> {
      //api/orders/productsin/1
      return this.http.get<any>(
        `${environment.server}/orders/productsin/${id}`);
   }

   updateQtyOfProductInCart(cartId:string,productId:string,qty:string): Observable<any> {
      //api/carts/37/updateqtyof/1/customer/1?qty=10
      //api/carts/37/updateqtyof/1/customer/1?qty=111
      return this.http.post<any>(
        `${environment.server}/carts/${cartId}/updateqtyof/${productId}/customer/1?qty=${qty}`,null);
   }

   getSearchedProductsInShop(id:string,fts:string): Observable<Product[]> {
      //api/products/search?fts=pellentesque&shopId=1
      return this.http.get<any>(
        `${environment.server}/products/search?fts=${fts}&shopId=2`);
   }

   findavgsalespermonthinshopForYear(id:string,year:string): Observable<Result[]> {
      //api/analytics/findavgsalespermonthinshopforyear?id=1&year=2021
      return this.http.get<any>(
         `${environment.server}/analytics/findavgsalespermonthinshopforyear?id=2&year=${year}`);
   }

   findAvgSalesPerYearInShop(id:string, year: string): Observable<Result> {
      //api/analytics/findavgsalesperyearinshop?id=1&year=2021
      return this.http.get<any>(
         `${environment.server}/analytics/findavgsalesperyearinshop?id=2&year=${year}`);
   }
   findTotalCarts(id:string): Observable<Result> {
      //api/analytics/findcountcartsinshop?id=1
      return this.http.get<any>(
         `${environment.server}/analytics/findcountcartsinshop?id=2`);
   }

   createShop(s : ShopCreate):  Observable<any> {
      //api/shops
      return this.http.post<any>(
         `${environment.server}/shops`,s);
   }
}
