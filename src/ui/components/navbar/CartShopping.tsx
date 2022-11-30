import { useContext } from 'react';
import { ShoppingCartIcon } from '../../../assets/icons';
import { ModalCheckoutContext } from '../../../context';

export const CartShopping = () => {
  const { toggleCheckout } = useContext(ModalCheckoutContext);

  const handleClick = () => {
    toggleCheckout();
  };

  return (
    <div className="cart-shopping" onClick={handleClick}>
      <ShoppingCartIcon size="24" />
      <span className="cart-counter">4</span>
    </div>
  );
};
