import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state: RootState) => state.cart;

// Создаем селектор для получения суммы значений из объекта
export const selectTotalItemCount = createSelector(
  selectCartItems,
  (cartItems) => {
    const values = Object.values(cartItems);
    return values.reduce((sum, value) => sum + value, 0);
  }
);
