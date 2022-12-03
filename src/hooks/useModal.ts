import { useContext, useState } from 'react';
import { ModalCheckoutContext } from '../context';

export const useModal = () => {
  const { modalCheckoutState, showPayModal, toggleCheckout } =
    useContext(ModalCheckoutContext);
  const { showModal } = modalCheckoutState;

  return {
    showModal,
    showPayModal,
    toggleCheckout,
  };
};
