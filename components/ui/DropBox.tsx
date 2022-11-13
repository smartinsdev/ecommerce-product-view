type Props = {
  openCart: boolean;
};

export function DropBox({ openCart }: Props) {
  return (
    <div
      className={`${
        openCart ? "flex" : "hidden"
      } dropbox_animated--mobile md:dropbox_animated--desktop w-[95%] h-52 border border-gray-300 flex-col absolute right-1/2 translate-x-1/2 top-20 z-10 mt-3 rounded-lg bg-white shadow-2xl p-0 md:mt-6 md:px-4 md:w-80 md:right-1 md:top-14 md:translate-x-0`}
    >
      <div className="border-b border-neutral-100">
        <h3 className="text-sm font-bold py-4 px-6">Cart</h3>
      </div>
      <div className="flex items-center justify-center flex-1">
        <p className="font-normal text-neutral-300">Your cart is empty.</p>
      </div>
    </div>
  );
}
