import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from "./dto/add-product.dto";

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [
        {
            id: "1234",
            title: "This is a test",
            desc: "See if it works",
            price: 345
        },
        {
            id: "56789",
            title: "This is another test",
            desc: "Learing nestjs",
            price: 345
        }
    ];

    findAll(): Product[]{
        return this.products;
    }

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

    private findProduct(id: string) {
        const product = this.products.find(prod => prod.id === id);
        if(!product) {
            throw new NotFoundException('Could not find product');
        }
        return product;
    }

}