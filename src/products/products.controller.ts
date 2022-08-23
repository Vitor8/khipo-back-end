import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  HttpStatus,
  Delete
} from '@nestjs/common';

const { OK, CREATED } = HttpStatus;

import { ProductsService } from './products.service';
import { httpResponse } from 'src/common/utils';
import { newProductDto } from './dto/new-product-dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productService: ProductsService
  ) {}

  @Get()
  async getAllProducts(): Promise<Record<string, unknown>>{
    const products = await this.productService.getAllProducts();
    const message = "Produtos listados com sucesso!";

    return httpResponse(true, OK, message, { products });
  }

  @Get(':id')
  async getProductById(
    @Param('id') id: string,
  ): Promise<Record<string, unknown>>{
    const product = await this.productService.getProductById(Number(id));
    const message = `Produto ${id} listado com sucesso!`;

    return httpResponse(true, OK, message, { product });
  }

  @Post()
  async createProduct(
    @Body() newProduct: newProductDto,
  ) {
    const product = await this.productService.createProduct(newProduct);
    const message = `Novo produto criado com sucesso!`;

    return httpResponse(true, CREATED, message, { product });
  }

  @Patch(':id')
  async updateProduct(
    @Body() productToUpdate: newProductDto,
    @Param('id') id: string,
  ): Promise<Record<string, unknown>> {
    const product = await this.productService.updateProduct(productToUpdate, Number(id));
    const message = `Produto ${id} atualizado com sucesso!`;

    return httpResponse(true, OK, message, { product });
  }

  @Delete(':id')
  async deleteProductById(
    @Param('id') id: string,
  ): Promise<Record<string, unknown>> {
    await this.productService.deleteProductById(Number(id));
    const message = `Produto ${id} deletado com sucesso!`;

    return httpResponse(true, OK, message, {});
  }

}