import React, { useState } from "react";
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

  // const addToCart = async (itemId, size) => {
  //   if (!size) {
  //     toast.error("Select product Size");
  //   }

  //   let cartData = structuredClone(cartItems);

  //   if (cartData[itemId]) {
  //     if (cartData[itemId][size]) {
  //       cartData[itemId][size] += 1;
  //     } else {
  //       cartData[itemId][size] = 1;
  //     }
  //   } else {
  //     cartData[itemId] = {};
  //     cartData[itemId] = 1;
  //   }
  //   setCartItems(cartData);
  // };

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount =  () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }return totalAmount;
  };

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
    getCartCount,
    updateQuantity,getCartAmount
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
