import { createSlice } from '@reduxjs/toolkit';
interface CartItem {
  id: number;
  quantity: number;
  // other properties of your cart item
}

interface CartState {
  cart: CartItem[];
}
const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemInCart = state.cart.find(item => item.id === id);

      if (itemInCart) {
        state.cart = state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeToCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        item => item.id != action.payload.id,
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      let itemInCart = state.cart.find(item => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++; // Incrementing the quantity property
      }
    },
    decrementQuantity: (state, action) => {
      let itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else if (itemInCart && itemInCart.quantity === 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      }
    },
  },
});

export const { addToCart, removeToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
