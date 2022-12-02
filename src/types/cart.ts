import { Product } from './products';

export interface CartItem {
  quantity: number;
  product: Product;
}

export type InitilStateCart = {
  cartItems: CartItem[];
  addToCart: (item: Product) => void;
  deleteToCart: (item: Product) => void;
  updateItemCart: (cartItemId: string, qty: number) => void;
};