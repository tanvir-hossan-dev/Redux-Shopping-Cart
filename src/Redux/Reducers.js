import { combineReducers } from "redux";
import { ProductPlus } from "./Action";

const initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductPlus:
      const newProduct = action.payload;
      const existingProduct = state.product.find(
        (item) => item.id === newProduct.id
      );

      const product = existingProduct
        ? state.product.map((item) =>
            item.id === existingProduct.id ? newProduct : item
          )
        : [...state.product, newProduct];
      return {
        ...state,
        product,
      };

    default:
      return state;
  }
};

const Reducers = combineReducers({ productReducer });

export default Reducers;
