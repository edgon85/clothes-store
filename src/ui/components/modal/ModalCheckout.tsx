import { useEffect } from 'react';
import image from '../../../assets/images/checkout-img.png';
import { useCart, useModal } from '../../../hooks';

export const ModalCheckout = () => {
  const { clearCart } = useCart();
  const { showModal, showPayModal } = useModal();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleClose = () => {
    clearCart();
    showPayModal();
  };

  return (
    <section className={`modal-checkout${showModal ? ' show-modal' : ''}`}>
      <div className="content">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <h2>¡Gracias por tu compra!</h2>
        <button className="btn-pay" onClick={handleClose}>
          SEGUIR COMPRANDO
        </button>
      </div>
    </section>
  );
};
