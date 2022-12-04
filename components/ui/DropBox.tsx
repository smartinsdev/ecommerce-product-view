import { useContext } from "react";
import { ProductCountContext } from "../../context/productCountContext";
import { ProductCheckout } from "./ProductCheckout";

type Props = {
  openCart: boolean;
};

export function DropBox({ openCart }: Props) {
  const ctx = useContext(ProductCountContext);
  return (
    <div
      className={`${
        openCart ? "flex" : "hidden"
      } dropbox_animated--mobile md:dropbox_animated--desktop w-[95%] h-52 border border-gray-300 flex-col absolute right-1/2 translate-x-1/2 top-20 z-10 mt-3 rounded-lg bg-white shadow-2xl p-0 md:mt-6 md:px-4 md:w-80 md:right-1 md:top-14 md:translate-x-0`}
    >
      <div className="border-b border-neutral-100">
        <h3 className="text-lg font-bold py-4 px-6 md:px-2">Cart</h3>
      </div>
      <div className="flex items-center justify-start px-6 flex-grow md:px-2">
        {ctx?.count ? (
          <ProductCheckout />
        ) : (
          <p className="font-normal text-neutral-300 self-center text-center">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}
