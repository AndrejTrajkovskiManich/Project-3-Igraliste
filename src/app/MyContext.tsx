"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

interface MyContextProps {
  favorites: any[];
  cartItem:any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);
interface ComponentProps {
  children: React.ReactNode;
  
}
export const MyContextProvider: React.FC<ComponentProps> = ({ children }) => {
  let storedValue: any = [];
  let storedValueCart: any = [];
  
  if (typeof window !== 'undefined') {
     storedValue = JSON.parse(localStorage.getItem("favorites") || "[]") || [];
     storedValueCart = JSON.parse(localStorage.getItem("cartItems") || "[]") || [];
  }

  const [favorites, setFavorites] = useState<any[] | any>(storedValue);
  const [cartItem, setItems] = useState<any[] | any>(storedValueCart);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem])
  return (
    <MyContext.Provider value={{ favorites, setFavorites ,cartItem , setItems}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextProps => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};

export default MyContext;