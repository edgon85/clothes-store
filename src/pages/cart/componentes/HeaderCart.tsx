import { useContext, useEffect, useState } from 'react';
import { CloseIcon } from '../../../assets/icons';
import { ModalCheckoutContext } from '../../../context';
import { useCart } from '../../../hooks';
import { CartShopping } from '../../../ui';

export const HeaderCart = () => {
  const { toggleCheckout } = useContext(ModalCheckoutContext);
  const { cartItems } = useCart();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className="header-cart">
      <div style={{ cursor: 'pointer' }} onClick={() => toggleCheckout()}>
        <CloseIcon size="24" />
      </div>
      <div className="head-info">
        <h6>Carrito</h6>
        <span>
          {cartItems.length} {cartItems.length == 1 ? 'artículo' : 'artículos'}{' '}
          - $ {total} USA
        </span>
      </div>
      <div className="cart-shop">
        <CartShopping />
      </div>
    </div>
  );
};
