// product.service.ts
import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product> {
    return this.products.find(product => product.id === id);
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async update(id: string, product: Product): Promise<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...product, id };
      return this.products[index];
    }
    return null;
  }

  async delete(id: string): Promise<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    }
    return null;
  }
}

