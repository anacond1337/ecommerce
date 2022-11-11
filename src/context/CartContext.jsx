/* eslint-disable no-case-declarations */
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':

      const found = state.content.find((element) => element === action.payload);
      if (found === undefined) {
        state.content.push(action.payload);
      }
      console.log(state.content);
      return state;

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
