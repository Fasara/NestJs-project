import { Body, Controller, Post } from '@nestjs/common';

import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
    constructor(private readonly producstService: ProductsService){}


    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        const generatedId = this.producstService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
        );
        return { id: generatedId };
    }
}