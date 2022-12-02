import { useReducer } from 'react';
import { CartItem, Product } from '../../types';
import { CartContext } from './CartContext';
import { cartReducer } from './cartReducer';

const INITIAL_STATE = {
  cartItems: [],
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Cartprovider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addToCart = (product: Product) => {
    dispatch({ type: 'addToCart', payload: product });
  };

  const deleteToCart = (product: Product) => {
    dispatch({ type: 'deleteToCart', payload: product });
  };

  const updateItemCart = (cartItemId: string, qty: number) => {
    dispatch({
      type: 'updateItemCart',
      payload: { _id: cartItemId, _qty: qty },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        deleteToCart,
        updateItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
