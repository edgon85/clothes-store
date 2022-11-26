import { useEffect, useMemo, useState } from 'react';
import { Category, Filtrado, Product } from '../../types';
import { Navbar } from '../../ui';
import {
  CategorySection,
  FilterSeccion,
  GridSection,
  HeadMain,
} from '../components';
import api from '../../data/api';

/* type Filters = {
  color: null | ((product: Product) => boolean);
  price: null | ((product: Product) => boolean);
  talla: null | ((product: Product) => boolean);
};
 */

export const ClothesStorePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category | null>({
    id: 0,
    name: 'Todo',
  });
  const [filters, setFilters] = useState<Record<string, null | Filtrado>>({
    color: null,
    price: null,
    tallas: null,
  });

  useEffect(() => {
    api.product.list().then((resp) => {
      setProducts(resp);
    });
  }, []);

  useEffect(() => {
    api.categorie.list().then((resp) => setCategories(resp));
  }, []);

  const matchesCategories = useMemo(
    () =>
      products.filter((product) => {
        if (category?.id === 0) {
          return products;
        } else {
          return categories ? product.categoryId === category?.id : true;
        }
      }),
    [category, products]
  );

  const filterMatches = useMemo(() => {
    const filtersToApply = Object.values(filters).filter(Boolean);

    let filterMatch = [];

    if (category?.id === 0) {
      filterMatch = products;
    } else {
      filterMatch = matchesCategories;
    }

    for (const filter of filtersToApply) {
      filterMatch = filterMatch.filter(filter!);
    }

    return filterMatch;
  }, [category, filters, products]);

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
        <FilterSeccion
          onChange={(filter: Filtrado) =>
            setFilters((filters) => ({ ...filters, color: filter }))
          }
          products={filterMatches}
        />
        {/* ··············· */}
        <GridSection products={filterMatches} />
      </main>
    </>
  );
};
/* 
categories ? product.categoryId === category?.id : products
*/
