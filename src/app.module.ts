import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
