import { Injectable } from '@nestjs/common';
import { Fruit } from './fruit.interface';

@Injectable()
export class FruitsService {
    private readonly fruit: Fruit[] = [];

    addFruit(fruit: Fruit) {
        this.fruit.push(fruit);
    }

    getAllFruits() {
        return this.fruit;
    }
}

