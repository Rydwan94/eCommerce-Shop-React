import {
  ADD_PRODUCTS,
  REMOVE_PRODUCTS,
  FILTER_FAVOURITE_PRODUCTS,
  FILTER_PRODUCTS,
} from "../actions/appActions";
import { products } from "../data";

const initialState = {
  basketQuantity: 0,
  products,
  filteredProducts: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        basketQuantity: state.basketQuantity + action.payload.quantity,
      };
    case REMOVE_PRODUCTS:
      return {
        ...state,
        basketQuantity: state.basketQuantity - action.payload.quantity,
      };
      case FILTER_PRODUCTS:
        const { category } = action.payload;
        const filteredProducts = state.products.filter(product => {
          if (category === "all") {
            return true; // Zwraca wszystkie produkty, jeśli kategoria to "all"
          } else {
            return product.category === category; // Zwraca produkty z pasującą kategorią
          }
        });
      
        return {
          ...state,
          filteredProducts,
        };
      case FILTER_FAVOURITE_PRODUCTS:
        const favouriteProducts = state.products.filter(product => product.favourite === action.payload);
        return {
          ...state,
          filteredProducts: favouriteProducts.length > 0 ? favouriteProducts : [],
        };
      

    default:
      return state;
  }
};

export default ProductsReducer;
