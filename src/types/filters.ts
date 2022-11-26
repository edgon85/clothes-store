import { Product } from '.';

export type Filter = {
  id: string;
  name: string;
  items?: Filter[];
  sublevels?: Filter;
};

export type Filtrado = null | ((product: Product) => boolean);
