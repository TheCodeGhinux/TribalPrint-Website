import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getInitialCart = () => {
  const localTodoList = window.localStorage.getItem("cartList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("cartList", JSON.stringify([]));
  return [];
};

const initialState = {
  cartItems: getInitialCart(),
  cartTotalAmount: 0,
  cartTotalQuantity:0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add item to cart
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item increased");
      }else {
        const temp = {...action.payload, cartQuantity: 1};
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    
    // Increase Item
    setIncreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    // Decrease Item
    setDecreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
    setDecreaseItem,
    setIncreaseItem
} = cartSlice.actions;

export default cartSlice.reducer;
