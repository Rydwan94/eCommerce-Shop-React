
import { products } from "../data";
export const ADD_PRODUCTS = "ADD_PRODUCT";
export const REMOVE_PRODUCTS = "REMOVE_PRODUCT";
export const FAVOURITES_PRODUCTS = "FAVOURITES_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const add = (productId) => {
  const product = products.find((p) => p.id === productId);

  return {
    type: ADD_PRODUCTS,
    payload: {
      id: product.id,
      quantity: 1,
    },
  };
};

export const remove = (productId) => {
  const product = products.find((p) => p.id === productId);
  return {
    type: REMOVE_PRODUCTS,
    payload: {
      id: product.id,
      quantity: 1,
    },
  };
};

export const favourites = (productId) => {
  const product = products.find((p) => p.id === productId);
  return {
    type: FAVOURITES_PRODUCTS,
    payload: {
      id: product.id,
    },
  };
};

export const filter = (category) => {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      category: category,
    },
  };
};
