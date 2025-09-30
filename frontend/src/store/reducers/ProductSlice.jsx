import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  products: [],
}
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadproducts: (state, action) => {
      state.products = action.payload;
    },
    loadlazyproducts: (state, action) => {
      const newProducts = action.payload.filter(
        (p) => !state.products.find((item) => item.id === p.id)
      );
      state.products = [...state.products, ...newProducts];
    }

  },

})
export default ProductSlice.reducer;
export const { loadproducts, loadlazyproducts } = ProductSlice.actions; 