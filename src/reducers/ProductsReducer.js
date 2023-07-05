import {
  ADD_PRODUCTS,
  REMOVE_PRODUCTS,
  FAVOURITES_PRODUCTS,
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
        const filteredProducts = state.products.filter(
          (product) => product.category === action.payload.category
        );
  
        return {
          ...state,
          filteredProducts: filteredProducts,
        };
      default:
        return state;
    }
  };

export default ProductsReducer;
