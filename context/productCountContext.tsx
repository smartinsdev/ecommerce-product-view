import React, { Dispatch, SetStateAction } from "react";

type ProductCountProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const ProductCountContext =
  React.createContext<ProductCountProps | null>(null);
