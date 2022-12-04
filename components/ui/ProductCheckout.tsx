import Image from "next/image";
import { useContext } from "react";
import { ProductCountContext } from "../../context/productCountContext";
import image from "../../public/images/image-product-1-thumbnail.jpg";
export function ProductCheckout() {
  const ctx = useContext(ProductCountContext);

  const handleDeleteProduct = () => {
    ctx?.setCount(0);
  };

  return (
    <div className="flex flex-col justify-center gap-4 flex-grow h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 overflow-hidden rounded-md">
            <Image
              src={image}
              alt="image product 1"
              className="max-w-full block w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm truncate capitalize text-neutral-300 max-w-full md:max-w-[20ch]">
              autumn limited edition sneakers
            </h3>
            <p className="text-sm text-neutral-300">
              $125.00 x {ctx?.count}{" "}
              <span className="font-bold text-neutral-900">{`$${
                Number(ctx?.count) * 125
              }.00`}</span>
            </p>
          </div>
        </div>
        <button
          className="group py-2 flex items-center justify-end"
          onClick={handleDeleteProduct}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-neutral-300 group-hover:text-red-700 transition-colors duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
      <button className="w-full rounded-xl py-2 bg-primary text-primary-pale hover:bg-primary-pale hover:text-primary transition-colors duration-300 font-bold flex items-center justify-center gap-3 focus:ring-2 focus:outline-none focus:ring-primary/70 active:bg-primary active:text-primary-pale">
        Checkout
      </button>
    </div>
  );
}
