import { ProductPlus } from "./Action.js";

export const AddProduct = (product) => {
  return {
    type: ProductPlus,
    payload: product,
  };
};
