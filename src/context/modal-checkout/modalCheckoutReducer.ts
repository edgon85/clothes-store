import { ModalInitalState } from '../../types';

type modalActions =
  | { type: 'openModal'; payload: boolean }
  | { type: 'showModal'; payload: boolean };

export const modalCheckoutReducer = (
  state: ModalInitalState,
  action: modalActions
) => {
  switch (action.type) {
    case 'openModal':
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case 'showModal':
      return {
        ...state,
        showModal: action.payload,
      };

    default:
      return state;
  }
};
