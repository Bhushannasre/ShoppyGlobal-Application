import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';

const loadState = () => {
  try {
    const s = localStorage.getItem('shoppy_cart_final');
    if (!s) return undefined;
    return JSON.parse(s);
  } catch (e) { return undefined; }
}

const preloaded = { cart: loadState() || undefined };

const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: preloaded
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('shoppy_cart_final', JSON.stringify(state.cart));
  } catch (e) {}
});

export default store;
