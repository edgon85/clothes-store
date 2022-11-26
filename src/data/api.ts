import { Category, Product } from '../types';
import { products } from './product.json';
import { categories } from './category.json';

const api = {
  product: {
    list: async (): Promise<Product[]> => {
      return products;
    },
  },
  categorie: {
    list: async (): Promise<Category[]> => {
      return categories;
    },
  },
};

export default api;
