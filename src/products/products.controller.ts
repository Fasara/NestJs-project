import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { ProductsService } from './products.service';
import { PostRequestProduct } from './product.model';

@Controller('products')
export class ProductsController {
    constructor(private readonly producstService: ProductsService){}

    @Post()
    addProduct(@Body() postRequestProduct: PostRequestProduct) 
    {
        console.log('controller::addProduct');
        const generatedId = this.producstService.insertProduct(
            postRequestProduct.title, 
            postRequestProduct.desc, 
            postRequestProduct.price
        );
        return { id: generatedId };
    }

    @Get('all')
    getAllProducts() {
        console.log('controller::getAllProducts');
        return this.producstService.getProducts();
    }

    @Get(':id')
    getSingleProduct(@Param('id') productId: string ){
        return this.producstService.getSingleProduct(productId);
    }

}