import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';

import { ProductsService } from './products.service';
import { AddProductDto, Product } from './dto/add-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly producstService: ProductsService){}

    @Post()
    addProduct(@Body() addProductDto: AddProductDto) 
    {
        const generatedId = this.producstService.insertProduct(
            addProductDto.title, 
            addProductDto.desc, 
            addProductDto.price
        );
        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.producstService.getProducts();
    }

    @Get(':id')
    getSingleProduct(@Param('id') productId: string ){
        return this.producstService.getSingleProduct(productId);
    }

    // @Patch(':id')
    // updateProduct(
    //     @Param('id') prodId: string,
    //     @Body() product: Product
    // ){

    // @Delete(':id')
    // deleteProduct(@Param())
}