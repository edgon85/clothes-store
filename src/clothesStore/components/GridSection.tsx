import { useEffect, useState } from 'react';
import api from '../../data/api';
import { product } from '../../types';
import { ProductCard } from '../../ui';

type Props = {
  products: product[];
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
