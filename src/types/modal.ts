export interface ModalInitalState {
  isModalOpen: boolean;
}

export type ModalCheckoutContextProps = {
  modalCheckoutState: ModalInitalState;
  toggleCheckout: () => void;
};
