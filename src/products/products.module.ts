import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsEntity } from 'src/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
