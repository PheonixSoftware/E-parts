 import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  REMOVE_CART_ITEMS
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [],shippingInfo:{} },
  action
) => {
  var i=8;
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
case i:
return {
  
}
     case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
      
    case REMOVE_CART_ITEMS:
      return {
        ...state,
        cartItems:[],
        shippingInfo:[]
      };

    default:
      return state;
  }
};
