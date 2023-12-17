import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });
  describe('findAll', () => {
    it('should return an array of products', async () => {
      const products: Product[] = [
        { id: '1', name: 'Product 1', price: 100 },
        { id: '2', name: 'Product 2', price: 200 },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(products);
  
      expect(await controller.findAll()).toEqual(products);
    });
  });
  

  describe('findById', () => {
    it('should return a product if found', async () => {
      const product: Product = { id: '1', name: 'Product 1', price: 100 };
      jest.spyOn(service, 'findById').mockResolvedValue(product);
  
      expect(await controller.findById('1')).toEqual(product);
    });
  
    it('should throw an error if product is not found', async () => {
      jest.spyOn(service, 'findById').mockResolvedValue(null);
  
      try {
        await controller.findById('1');
      } catch (error) {
        expect(error.message).toBe('Product not found');
      }
    });
  });
  

  describe('create', () => {
    it('should create and return a new product', async () => {
      const product: Product = { id: '1', name: 'Product 1', price: 100 };
      jest.spyOn(service, 'create').mockResolvedValue(product);
  
      expect(await controller.create(product)).toEqual(product);
    });
  });
  

  describe('update', () => {
    it('should update and return a product', async () => {
      const updatedProduct: Product = { id: '1', name: 'Updated Product', price: 200 };
      jest.spyOn(service, 'update').mockResolvedValue(updatedProduct);
  
      const productId = '1';
      expect(await controller.update(productId, updatedProduct)).toEqual(updatedProduct);
    });
  
    it('should throw an error if product is not found for update', async () => {
      const productId = '1';
      jest.spyOn(service, 'update').mockResolvedValue(null);
  
      try {
        await controller.update(productId, { id: '1', name: 'update product', price: 200 });
      } catch (error) {
        expect(error.message).toBe('Product not found');
      }
    });
  });
  
  describe('delete', () => {
    it('should delete and return a product', async () => {
      const productToDelete: Product = { id: '1', name: 'Product 1', price: 100 };
      jest.spyOn(service, 'delete').mockResolvedValue(productToDelete);
  
      const productId = '1';
      expect(await controller.delete(productId)).toEqual(productToDelete);
    });
  
    it('should throw an error if product is not found for delete', async () => {
      const productId = '1';
      jest.spyOn(service, 'delete').mockResolvedValue(null);
  
      try {
        await controller.delete(productId);
      } catch (error) {
        expect(error.message).toBe('Product not found');
      }
    });
  });
  
});

