import { ShoppingCartIcon } from '../../../assets/icons';
import logoImg from '../../../assets/images/logo.png';
import { InputSearch, CartShopping } from './';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <div className="actions">
          <InputSearch />
          <CartShopping />
        </div>
      </div>
    </div>
  );
};
