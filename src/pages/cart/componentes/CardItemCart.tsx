import { TrashIcon } from '../../../assets/icons';
import image4 from '../../../assets/images/products/detail-4.jpg';
import { useCart } from '../../../hooks';
import { CartItem } from '../../../types';

type Props = {
  cartItem: CartItem;
};

export const CardItemCart = ({ cartItem }: Props) => {
  const { product } = cartItem;
  const { deleteToCart, handleDecrement, handleIncrement } = useCart();

  return (
    <div className="card-item">
      <div className="image">
        <img
          src={`/src/assets/images/products/${product?.coverImage}.jpg`}
          alt=""
        />
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <h2>${product.price} USA</h2>
        <div className="actions">
          <div className="counter">
            <button
              onClick={() => handleDecrement(cartItem.quantity, product.id)}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => handleIncrement(cartItem.quantity, product.id)}
            >
              +
            </button>
          </div>
          <div className="delete" onClick={() => deleteToCart(product)}>
            <TrashIcon size="24" />
          </div>
        </div>
      </div>
    </div>
  );
};
