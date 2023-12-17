import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
}
