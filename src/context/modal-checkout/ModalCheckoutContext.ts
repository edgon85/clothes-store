import { createContext } from 'react';
import { ModalCheckoutContextProps } from '../../types';

export const ModalCheckoutContext = createContext<ModalCheckoutContextProps>(
  {} as ModalCheckoutContextProps
);
