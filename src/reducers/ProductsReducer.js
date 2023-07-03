import {
  ADD_PRODUCTS,
  REMOVE_PRODUCTS,
  FAVOURITES_PRODUCTS,
} from "../actions/appActions";
import { products } from "../data";


const initialState = {
  basketQuantity: 0,
  products,
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
    case FAVOURITES_PRODUCTS:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.productId
            ? { ...item, favourite: !item.favourite }
            : item
        ),
      };
    default:
      return state  
  }
};

export default ProductsReducer;
