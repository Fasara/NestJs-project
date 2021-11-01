export class AddProductDto {

    constructor(
        public title: string, 
        public desc: string, 
        public price: number) {

    }
}

export class Product {

    constructor(
        public id: string, 
        public title: string, 
        public desc: string, 
        public price: number) {

    }
}