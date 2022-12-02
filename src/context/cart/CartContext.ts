import { createContext } from 'react';
import { InitilStateCart } from '../../types';

export const CartContext = createContext<InitilStateCart>(
  {} as InitilStateCart
);
