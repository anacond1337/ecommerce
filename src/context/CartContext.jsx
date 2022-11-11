/* eslint-disable no-case-declarations */
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const found = state.content.find((element) => element.id === action.payload.id);
      if (found === undefined) {
        return { ...state, content: [...state.content, { ...action.payload, amount: 1 }] };
      }
      return state;
    }

    case 'INCREMENT': {
      return {
        content: state.content.map((element) => {
          if (element.id === action.payload) {
            return { ...element, amount: element.amount + 1 };
          }
          return element;
        }),
      };
    }

    case 'DECREMENT': {
      return {
        content: state.content.map((element) => {
          if (element.id === action.payload) {
            return { ...element, amount: element.amount - 1 };
          }
          return element;
        }),
      };
    }
    default: return state;
  }
};

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    content: [],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
