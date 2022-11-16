import { product } from '../types';
import { products } from './product.json';

const api = {
  product: {
    list: async (): Promise<product[]> => {
      return products;
    },
  },
};

export default api;
