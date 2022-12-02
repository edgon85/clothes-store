import { useContext } from 'react';
import { ShoppingCartIcon } from '../../../assets/icons';
import { ModalCheckoutContext } from '../../../context';
import { useCart } from '../../../hooks';

export const CartShopping = () => {
  const { toggleCheckout } = useContext(ModalCheckoutContext);
  const { cartItems } = useCart();

  const handleClick = () => {
    if (cartItems.length === 0) return;
    toggleCheckout();
  };

  return (
    <div className="cart-shopping" onClick={handleClick}>
      <ShoppingCartIcon size="24" />
      {cartItems.length >= 1 ? (
        <span className="cart-counter">{cartItems.length}</span>
      ) : null}
    </div>
  );
};
