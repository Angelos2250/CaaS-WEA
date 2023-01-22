export class Product {
   constructor(
      public idProduct?: string,
      public shortDesc?: string,
      public description?: string,
      public price?: number,
      public downloadLink?: string,
      public idShop?: string,
      public qty?: number,
      public deletedFlag?: number
      ) {}
}
