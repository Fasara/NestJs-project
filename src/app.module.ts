import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FruitsController } from './food/fruits/fruits.controller';
import { FruitsService } from './food/fruits/fruits.service';

@Module({
  imports: [
    ProductsModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'rotacloud',
    //   database: 'test',

    // })
  ],
  controllers: [AppController, FruitsController],
  providers: [AppService, FruitsService],
})
export class AppModule {}
