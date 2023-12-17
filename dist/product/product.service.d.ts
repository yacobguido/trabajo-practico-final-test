import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
}
