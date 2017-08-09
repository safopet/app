export class Product {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        public count: number
    ) {
    }
}