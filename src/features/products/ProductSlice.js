import { createSlice } from "@reduxjs/toolkit";
import products from "../../productContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
};

const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
      return matchSearch;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },

},
});


export const {setSearchItem} = productSlice.actions;
export default productSlice.reducer;