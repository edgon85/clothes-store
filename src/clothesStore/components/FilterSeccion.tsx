import { useEffect, useMemo, useState } from 'react';
import { filters as filterData } from '../../data/filters.json';
import { Filtrado, Product } from '../../types';
import { Dropdown, SwitchStock } from '../../ui';

type Props = {
  products: Product[];
  onChange: (filtrado: Filtrado) => void;
};

export const FilterSeccion = ({ products, onChange }: Props) => {
  // const [filterSelected, setFilterSelected] = useState<string[]>([]);
  const [filterSelected, setFilterSelected] = useState<Set<string>>(new Set());

  /*  const colors = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (let product of products) {
      buffer.add(product.color);
    }

    return Array.from(buffer);
  }, [products]); */

  const handleChangeColor = (isChecked: boolean, color: string) => {
    const draft = structuredClone(filterSelected);

    if (isChecked) {
      draft.add(color);
    } else {
      draft.delete(color);
    }

    onChange(draft.size ? (product) => draft.has(product.color) : null);
    setFilterSelected(draft);
  };

  return (
    <section className="dropdowns">
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <ul>
          <li className="dropdowns-switch">
            {filterData.map((filter) => (
              <Dropdown
                key={filter.id}
                filter={filter}
                onClickFilter={handleChangeColor}
              />
            ))}
          </li>
        </ul>

        <SwitchStock />
      </div>
      <h6 className="total-articles">{products.length} Artículos</h6>
    </section>
  );
};
