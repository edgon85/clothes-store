import { useEffect, useState } from 'react';
import api from '../../data/api';
import { Product } from '../../types';
import { ProductCard } from '../../ui';

type Props = {
  products: Product[];
};

export const GridSection = ({ products }: Props) => {
  //

  return (
    <section className="cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
