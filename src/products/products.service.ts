import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsEntity } from 'src/entities/products.entity';
import { newProductDto } from './dto/new-product-dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productRepository: Repository<ProductsEntity>,
  ) {}

  public async getAllProducts(): Promise<ProductsEntity[]> {
    const products = await this.productRepository.find();

    return products;
  }

  public async getProductById(id: number): Promise<ProductsEntity> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Produto de id ${id} não encontrado`);
    }

    return product;
  }

  public async createProduct(newProduct: newProductDto): Promise<ProductsEntity> {
    const productCreated = await this.productRepository.save(newProduct);

    return productCreated;
  }

  public async updateProduct(productToUpdate: newProductDto, id: number): Promise<ProductsEntity> {
    const product = this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Produto de id ${id} não encontrado`);
    }

    await this.productRepository.update({ id }, productToUpdate);

    const updatedProduct = this.productRepository.findOne({ where: { id } });

    return updatedProduct;
  }

  public async deleteProductById(id: number) {
    const product = this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Produto de id ${id} não encontrado`);
    }

    return await this.productRepository.delete(id);
  }
}
