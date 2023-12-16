import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getInitialCart = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initialState = {
  cartItems: getInitialCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
