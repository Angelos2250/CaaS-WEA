export class Order {
   constructor(
      public idOrder?: string,
      public dateOfOrder?: string,
      public sumOfDiscount?: string,
      public idCustomer?: number,
      public sumAmount?: string
      ) {}
}
