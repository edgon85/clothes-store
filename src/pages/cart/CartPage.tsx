import { useContext } from 'react';
import { ModalCheckoutContext } from '../../context';
import { CardItemCart, PayForm } from './componentes';
import { HeaderCart } from './componentes/HeaderCart';

export const CartPage = () => {
  const { modalCheckoutState } = useContext(ModalCheckoutContext);

  const { isModalOpen } = modalCheckoutState;

  return (
    // <div className="cart-page show-checkout">
    <div className={`cart-page${isModalOpen ? ' show-checkout' : ''}`}>
      <div className="content">
        <HeaderCart />

        <CardItemCart />

        <PayForm />
      </div>
    </div>
  );
};
