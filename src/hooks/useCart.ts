import { useContext, useState } from 'react';
import { CartContext } from '../context';

export const useCart = () => {
  const { cartItems, addToCart, deleteToCart, updateItemCart } =
    useContext(CartContext);

  const handleIncrement = (qty: number, prodId: string) => {
    const incremetQyt = qty + 1;
    updateItemCart(prodId, incremetQyt);
  };
  const handleDecrement = (qty: number, prodId: string) => {
    if (qty === 1) return;
    const decremetQyt = qty - 1;
    updateItemCart(prodId, decremetQyt);
  };

  return {
    cartItems,
    addToCart,
    deleteToCart,

    // updateItemCart,
    handleIncrement,
    handleDecrement,
  };
};
