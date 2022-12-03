import { CartItem, Product } from '../../types';

type CartActions =
  | { type: 'addToCart'; payload: Product }
  | { type: 'deleteToCart'; payload: Product }
  | { type: 'clearCart'; payload: null }
  | { type: 'updateItemCart'; payload: { _id: string; _qty: number } };

export const cartReducer = (state: any, action: CartActions) => {
  switch (action.type) {
    case 'addToCart':
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload.id,
            product: action.payload,
            quantity: 1,
          },
        ],
        // cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case 'deleteToCart':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (prod: CartItem) => prod.product.id !== action.payload.id
        ),
      };

    case 'updateItemCart':
      return {
        ...state,
        cartItems: state.cartItems.filter((item: CartItem) =>
          item.product.id === action.payload._id
            ? (item.quantity = action.payload._qty)
            : item.quantity
        ),
      };

    case 'clearCart':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
