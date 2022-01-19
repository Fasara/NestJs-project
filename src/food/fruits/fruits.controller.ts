import { Controller, Get, Post } from '@nestjs/common';

@Controller('fruits')
export class FruitsController {
    @Get()
    getAllFruits(): string {
        return 'Eat more fruits';
    }
}
