import { useReducer } from 'react';
import { ModalCheckoutContext, modalCheckoutReducer } from './';

const INITIAL_STATE = {
  isModalOpen: false,
  showModal: false,
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ModalCheckoutProvider = ({ children }: Props) => {
  const [modalCheckoutState, dispatch] = useReducer(
    modalCheckoutReducer,
    INITIAL_STATE
  );

  const toggleCheckout = () => {
    dispatch({ type: 'openModal', payload: !modalCheckoutState.isModalOpen });
  };

  const showPayModal = () => {
    dispatch({ type: 'showModal', payload: !modalCheckoutState.showModal });
  };

  return (
    <ModalCheckoutContext.Provider
      value={{
        ...modalCheckoutState,
        modalCheckoutState,
        toggleCheckout,
        showPayModal,
      }}
    >
      {children}
    </ModalCheckoutContext.Provider>
  );
};
