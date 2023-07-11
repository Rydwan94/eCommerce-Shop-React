
import { products } from "../data";
export const ADD_PRODUCTS = "ADD_PRODUCT";
export const REMOVE_PRODUCTS = "REMOVE_PRODUCT";
export const ADD_TO_FAVOURITE_PRODUCT = "ADD_TO_FAVOURITE_PRODUCT";
export const FILTER_FAVOURITE_PRODUCTS = "FILTER_FAVOURITE_PRODUCTS"
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

export const addToFavourite = (productId) => {
  const product = products.find((p) => p.id === productId);
  return {
    type: ADD_TO_FAVOURITE_PRODUCT,
    payload: {
      id: product.id,
    },
  };
};

export const filterFavouritesProducts = () => {
  return {
    type: FILTER_FAVOURITE_PRODUCTS,
    payload: true,
  };
};


export const filter = (category) => {
  return {
    type: FILTER_PRODUCTS,
    payload: {
      category
    },
  };
};
