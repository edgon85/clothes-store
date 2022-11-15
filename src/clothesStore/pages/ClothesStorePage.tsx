import { Dropdown, Navbar, Tab } from '../../ui';
import { GridSection, HeadMain } from '../components';
import { filters as filterData } from '../../data/filters.json';

export const ClothesStorePage = () => {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <HeadMain />
        <section className="tabs-filter">
          <Tab title="Todo" isSelected={true} />
          <Tab title="Sudaderas" isSelected={false} />
          <Tab title="pantalones" isSelected={false} />
          <Tab title="Vermudas" isSelected={false} />
        </section>
        <section className="dropdowns">
          <li className="dropdowns-switch">
            {filterData.map((filter) => (
              <Dropdown key={filter.id} filter={filter} />
            ))}
          </li>
          <h6 className="total-articles">268 Artículos</h6>
        </section>
        <GridSection />
      </main>
    </>
  );
};
