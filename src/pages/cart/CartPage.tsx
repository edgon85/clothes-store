import { CloseIcon, TrashIcon } from '../../assets/icons';
import { CartShopping } from '../../ui';
import image4 from '../../assets/images/products/detail-4.jpg';
import visa from '../../assets/images/cards-icons/visa.svg';
import american from '../../assets/images/cards-icons/american-expres.svg';
import discover from '../../assets/images/cards-icons/discover.svg';
import mastercard from '../../assets/images/cards-icons/mastercard.svg';
import cvc from '../../assets/images/cards-icons/cvc-card.png';

export const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="content">
        <div className="header-cart">
          <CloseIcon size="24" />
          <div className="head-info">
            <h6>Carrito</h6>
            <span>1 artículo - $ 175 USA</span>
          </div>
          <div className="cart-shop">
            <CartShopping />
          </div>
        </div>
        <div className="card-item">
          <div className="image">
            <img src={image4} alt="" />
          </div>
          <div className="card-info">
            <h3>365 Signature sudadera con capucha</h3>
            <h2>$175 USA</h2>
            <div className="actions">
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="delete">
                <TrashIcon size="24" />
              </div>
            </div>
          </div>
        </div>

        <form className="payform">
          <div className="form-control">
            <label htmlFor="">Nombre</label>
            <input className="input-control" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="">Apellido</label>
            <input className="input-control" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="">Dirección</label>
            <input className="input-control" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="">Correo electrónico</label>
            <input className="input-control" type="email" />
          </div>

          <div className="credit-card">
            <label htmlFor="">informacion de la tarjeta</label>
            <div className="input-card-number">
              <input type="text" placeholder="1234 5678 1221 9876" />
              <div className="icons">
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={american} alt="" />
                <img src={discover} alt="" />
              </div>
            </div>
            <div className="input-card-date">
              <input type="text" placeholder="MM / YY" max={5} required />
              <div className="cvc">
                <input type="number" placeholder="CVC" maxLength={4} required />
                <img src={cvc} alt="" />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="">Nombre de la tarjeta</label>
            <input className="input-control" type="text" />
          </div>

          <button className="btn-pay">Pagar ahora</button>
        </form>
      </div>
    </div>
  );
};
