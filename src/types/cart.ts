import { Product } from './products';

export interface CartItem {
  quantity: number;
  product: Product;
}
