// import { addProducts } from "@/src/actions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fetchDetails: [],
  fetchProducts: [],
  fetchWishlist: [],
  fetchProductPreview: {},
};

const userSlice = createSlice({
  name: "userDetils",
  initialState,
  reducers: {
    getDetails: (state, { payload }) => {
      state.fetchDetails = payload;
    },
    getProducts: (state, { payload }) => {
      state.fetchProducts = payload;
    },
    productPreview: (state, { payload }) => {
      const id = payload;
      const findid = state.fetchProducts.find(
        (fetchProducts) => fetchProducts._id === id
      );
      state.fetchProductPreview = findid;
    },
    getwishlist: (state, { payload }) => {
      const id = payload;
      const findid = state.fetchProducts.find(
        (fetchProducts) => fetchProducts._id === id
      );
      state.fetchWishlist = findid;
    },
    removeWishlist: (state, { payload }) => {
      const id = payload;
      const findid = state.fetchWishlist.findIndex(
        (fetchProducts) => fetchProducts._id === id
      );
      state.fetchWishlist.splice(findid, 1);
    },
  },
});

export default userSlice.reducer;
export const {
  getDetails,
  getProducts,
  getwishlist,
  removeWishlist,
  productPreview,
} = userSlice.actions;
