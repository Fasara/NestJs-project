import { Injectable } from '@nestjs/common';
import { Fruit } from './fruit.interface';

@Injectable()
export class FruitsService {

     private readonly fruit: Fruit[] = [
        {
            id: 1,
            name: "Banana",
            colour: "yellow"
        }, 
        {
            id: 2,
            name: "Apple",
            colour: "red"
        },

        {
            id: 3,
            name: "Orange",
            colour: "orange"
        }

    ];


    eatFruit(): string {
        return 'Eat at least two apples per day';
    }

    addFruit(fruit: Fruit) {
        this.fruit.push(fruit);
    }

    getAllFruits(): Fruit[] {
        console.log(this.fruit);
        return this.fruit;
    }
}

