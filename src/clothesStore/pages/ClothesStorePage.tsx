import { Navbar, Tab } from '../../ui';
import { HeadMain } from '../components';

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
      </main>
    </>
  );
};
