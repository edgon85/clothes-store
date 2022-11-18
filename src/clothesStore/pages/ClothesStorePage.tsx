import { useEffect, useMemo, useState } from 'react';
import { Category, product } from '../../types';
import { Navbar } from '../../ui';
import {
  CategorySection,
  FilterSeccion,
  GridSection,
  HeadMain,
} from '../components';
import api from '../../data/api';

export const ClothesStorePage = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category | null>({
    id: 0,
    name: 'Todo',
  });

  const matches = useMemo(
    () =>
      products.filter((product) => {
        if (category?.id === 0) {
          return products;
        } else {
          return categories ? product.categoryId === category?.id : true;
        }
      }),
    [category]
  );

  useEffect(() => {
    api.product.list().then((resp) => {
      setProducts(resp);
    });
  }, []);

  useEffect(() => {
    api.categorie.list().then((resp) => setCategories(resp));
  }, []);

  return (
    <>
      <Navbar />
      <main className="wrapper">
        <HeadMain />
        {/* ··············· */}
        <CategorySection
          categories={categories}
          onClickCategory={setCategory}
          category={category}
        />
        {/* ··············· */}
        <FilterSeccion products={category?.id === 0 ? products : matches} />
        {/* ··············· */}
        <GridSection products={category?.id === 0 ? products : matches} />
      </main>
    </>
  );
};
/* 
categories ? product.categoryId === category?.id : products
*/
