import { filters as filterData } from '../../data/filters.json';
import { product } from '../../types';
import { Dropdown, SwitchStock } from '../../ui';

type Props = {
  products: product[];
};

export const FilterSeccion = ({ products }: Props) => {
  return (
    <section className="dropdowns">
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <li className="dropdowns-switch">
          {filterData.map((filter) => (
            <Dropdown key={filter.id} filter={filter} />
          ))}
        </li>
        <SwitchStock />
      </div>
      <h6 className="total-articles">{products.length} Artículos</h6>
    </section>
  );
};
