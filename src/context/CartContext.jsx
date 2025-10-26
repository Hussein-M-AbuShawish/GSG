import React, { createContext, useContext, useReducer, useEffect } from "react";

// إنشاء Context
const CartContext = createContext();

// الحالة الأولية
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Reducer لإدارة العمليات على السلة
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;
      if (existingItem) {
        // إذا كان المنتج موجودًا، زيادة الكمية
        updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // إضافة منتج جديد
        updatedCart = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price,
      };
    }

    case "REMOVE_FROM_CART": {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );

      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: state.totalQuantity - itemToRemove.quantity,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      };
    }

    case "INCREASE_QUANTITY": {
      const item = state.cartItems.find((i) => i.id === action.payload);
      const updatedCart = state.cartItems.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + item.price,
      };
    }

    case "DECREASE_QUANTITY": {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item.quantity === 1) {
        // إذا كانت الكمية 1، احذف المنتج
        return cartReducer(state, {
          type: "REMOVE_FROM_CART",
          payload: action.payload,
        });
      }

      const updatedCart = state.cartItems.map((i) =>
        i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
      );

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - item.price,
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // حفظ السلة في localStorage عند كل تغيير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // تحميل السلة من localStorage عند بداية التطبيق
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  // Functions للاستخدام في المكونات
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const increaseQuantity = (productId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productId });
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = {
    cartItems: state.cartItems,
    totalAmount: state.totalAmount,
    totalQuantity: state.totalQuantity,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom Hook لاستخدام Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
