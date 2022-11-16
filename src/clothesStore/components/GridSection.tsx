import { useEffect, useState } from 'react';
import api from '../../data/api';
import { product } from '../../types';
import { ProductCard } from '../../ui';

export const GridSection = () => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    api.product.list().then((resp) => {
      setProducts(resp);
    });
  }, []);

  return (
    <section className="cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
