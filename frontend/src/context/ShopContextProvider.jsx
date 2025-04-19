import React, { useState } from "react";
import { ShopContext } from "./ShopContext"; // notice this now imports from the new file
import { products } from "../assets/assets";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  // searching functionality
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
