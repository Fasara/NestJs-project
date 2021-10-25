import { Injectable, NotFoundException, Patch } from "@nestjs/common";

import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    // we need to return a copy of the products array.
    getProducts() {
        return [...this.products];
    }
    // find() runs for every item in the array
    getSingleProduct(productId: string) {
        const product = this.findProduct(productId);
        return { ...product };
    }

    // updateProduct(prodId : string, title: string, desc: string, price: number) {


    // }

    private findProduct(id: string) {
        const product = this.products.find(prod => prod.id === id);
        if(!product) {
            throw new NotFoundException('Could not find product');
        }
        return product;

    }

}