import visa from '../../../assets/images/cards-icons/visa.svg';
import american from '../../../assets/images/cards-icons/american-expres.svg';
import discover from '../../../assets/images/cards-icons/discover.svg';
import mastercard from '../../../assets/images/cards-icons/mastercard.svg';
import cvc from '../../../assets/images/cards-icons/cvc-card.png';
import { FormEvent } from 'react';
import { useModal } from '../../../hooks';

export const PayForm = () => {
  const { showPayModal, toggleCheckout } = useModal();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    toggleCheckout();
    showPayModal();
  };

  return (
    <form className="payform" onSubmit={handleSubmit}>
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
  );
};
