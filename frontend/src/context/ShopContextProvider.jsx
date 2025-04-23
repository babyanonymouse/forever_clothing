import React, { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext"; // notice this now imports from the new file
import { products } from "../assets/assets";
import { toast } from "react-toastify";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  // searching functionality
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product Size");
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
