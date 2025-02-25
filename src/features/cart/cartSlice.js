import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] }; // ✅ Change items to an array

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // ✅ Fix quantity typo
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // ✅ Fix typo
      }
    },
  },
});

// ✅ Export the actions and reducer correctly
export const { addToCart } = cartSlice.actions;
// export const { addToCart } = createSlice.actions;
export default cartSlice.reducer;
