import React, { useState } from "react";
import { ProductCountContext } from "../context/productCountContext";

type Props = {
  children: React.ReactNode;
};

export const ProductCountProvider = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <ProductCountContext.Provider value={{ count, setCount }}>
      {props.children}
    </ProductCountContext.Provider>
  );
};
