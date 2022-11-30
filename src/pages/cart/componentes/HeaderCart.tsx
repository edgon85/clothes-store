import { useContext } from 'react';
import { CloseIcon } from '../../../assets/icons';
import { ModalCheckoutContext } from '../../../context';
import { CartShopping } from '../../../ui';

export const HeaderCart = () => {
  const { toggleCheckout } = useContext(ModalCheckoutContext);

  return (
    <div className="header-cart" onClick={() => toggleCheckout()}>
      <div style={{ cursor: 'pointer' }}>
        <CloseIcon size="24" />
      </div>
      <div className="head-info">
        <h6>Carrito</h6>
        <span>1 artículo - $ 175 USA</span>
      </div>
      <div className="cart-shop">
        <CartShopping />
      </div>
    </div>
  );
};
