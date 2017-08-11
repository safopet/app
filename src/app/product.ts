export class Product {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        public count: number
    ) {
    }
   
    copy() : Product {
        return new Product(this.id, this.name, this.price, this.count);
    }
}