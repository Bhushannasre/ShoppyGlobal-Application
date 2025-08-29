import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = { items: {} };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload;
      const id = p.id;
      if (state.items[id]) state.items[id].quantity += 1;
      else state.items[id] = { id, title: p.title, price: p.price, thumbnail: p.thumbnail, quantity: 1 };
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const q = Math.max(1, Number(quantity) || 1);
      if (state.items[id]) state.items[id].quantity = q;
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity = Math.max(1, (state.items[id]?.quantity || 1) - 1);
    },
    clearCart: (state) => { state.items = {}; }
  }
});

export const { addToCart, removeFromCart, updateQuantity, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

const selectState = (s) => s.cart.items;
export const selectCartItems = createSelector([selectState], items => Object.values(items));
export const selectCartCount = createSelector([selectState], items => Object.values(items).reduce((sum,i)=>sum + i.quantity,0));
export const selectCartTotal = createSelector([selectCartItems], arr => arr.reduce((sum,i)=>sum + i.quantity * i.price,0));
