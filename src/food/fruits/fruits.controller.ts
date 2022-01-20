import { Controller, Get, Post } from '@nestjs/common';
import { Fruit } from './fruit.interface';
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {
    constructor(private readonly fruitService: FruitsService){}

    @Get()
    getAllFruits(fruit: Fruit): Fruit[] { 
        return this.fruitService.getAllFruits();
    
    }
}
