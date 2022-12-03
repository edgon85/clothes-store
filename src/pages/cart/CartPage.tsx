import { useContext, useEffect } from 'react';
import { ModalCheckoutContext } from '../../context';
import { useCart } from '../../hooks';
import { CardItemCart, PayForm } from './componentes';
import { HeaderCart } from './componentes/HeaderCart';

export const CartPage = () => {
  const { modalCheckoutState } = useContext(ModalCheckoutContext);
  const { isModalOpen } = modalCheckoutState;
  const { cartItems } = useCart();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    // <div className="cart-page show-checkout">

    <div className={`cart-page${isModalOpen ? ' show-checkout' : ''}`}>
      <div className="content">
        <HeaderCart />
        {cartItems.length === 0 ? (
          <div>Tú carrito esta vacio</div>
        ) : (
          <div>
            {cartItems.map((cartItem) => (
              <CardItemCart key={cartItem.product.id} cartItem={cartItem} />
            ))}

            <PayForm />
          </div>
        )}
      </div>
    </div>
  );
};
