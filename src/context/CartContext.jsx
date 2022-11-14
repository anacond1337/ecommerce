/* eslint-disable no-case-declarations */
import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';

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
            if (element.amount === 1) {
              return undefined;
            }
            return { ...element, amount: element.amount - 1 };
          }
          return element;
        }).filter((e) => e),
      };
    }

    case 'SEARCH': {
      return {
        content: state.content,
        searchField: action.payload,
      };
    }
    default: return state;
  }
};

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [state, dispatch] = useImmerReducer(cartReducer, {
    content: [],
    searchField: '',
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
