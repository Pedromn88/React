import React, { createContext, useCallback, useRef, useState } from "react";

export const CartContext = createContext([]);
export const AddCartContext = createContext(item => {});
export const RemoveCartContext = createContext(item => {});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const itemsRef = useRef(items);
  itemsRef.current = items;

const AddCart = useCallback(item => {
  setItems([...itemsRef.current, item]);
}, [])


const RemoveCart =useCallback(item => {
  const newItems = itemsRef.current.filter(
    _item => _item.id !== item.id
  );
  setItems(newItems);
}, [])


  return (
    <AddCartContext.Provider
      value={AddCart}
    >
      <RemoveCartContext.Provider
        value={RemoveCart}
      >
        <CartContext.Provider value={items}>{children}</CartContext.Provider>
      </RemoveCartContext.Provider>
    </AddCartContext.Provider>
  );
};
