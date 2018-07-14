export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imgURL: string,
        public category: string[],
        public price: number
    ) {

    }
}