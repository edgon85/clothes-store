export interface ModalInitalState {
  isModalOpen: boolean;
  showModal: boolean;
}

export type ModalCheckoutContextProps = {
  modalCheckoutState: ModalInitalState;
  toggleCheckout: () => void;
  showPayModal: () => void;
};
