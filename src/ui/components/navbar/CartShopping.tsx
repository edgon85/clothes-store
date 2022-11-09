import { ShoppingCartIcon } from '../../../assets/icons';

export const CartShopping = () => {
  return (
    <div className="cart-shopping">
      <ShoppingCartIcon size="24" />
      <span className="cart-counter">4</span>
    </div>
  );
};
