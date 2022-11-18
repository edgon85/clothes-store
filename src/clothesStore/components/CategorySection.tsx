import { useEffect, useState } from 'react';
import { Category } from '../../types';
import { Tab } from '../../ui';
import api from '../../data/api';

type Props = {
  categories: Category[];
  category: Category | null;
  onClickCategory: (category: Category | null) => void;
};

export const CategorySection = ({
  categories,
  category,
  onClickCategory,
}: Props) => {
  /* const [category, setCategory] = useState<Category | null>({
    id: 1,
    name: 'Todo',
  }); */

  return (
    <section className="tabs-filter">
      {categories.map((cat) => {
        return (
          <Tab
            key={cat.id}
            category={cat}
            onCategoryClick={onClickCategory}
            isSelected={cat.id === category?.id}
          />
        );
      })}
    </section>
  );
};
