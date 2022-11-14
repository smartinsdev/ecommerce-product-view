export function Description() {
  return (
    <article className=" flex flex-col px-6 lg:px-6 xl:px-10 py-0 md:py-5 space-y-4 lg:space-y-7 lg:mt-6">
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
          Sneaker Company
        </h2>
        <h1 className="text-3xl font-bold text-neutral-400  lg:text-4xl xl:text-5xl">
          <span className="block">Fall Limited Edition</span>
          <span className="block">Sneakers</span>
        </h1>
      </div>
      <p className="font-normal text-neutral-300 max-w-[55ch]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:gap-3">
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-bold text-neutral-400">$125.00</p>
          <p className="px-2 py-1 text-xs font-bold rounded-md bg-primary-pale text-primary">
            50%
          </p>
        </div>
        <p className="text-sm text-neutral-200 font-bold line-through">
          $250.00
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="w-full rounded-xl py-1 bg-neutral-100 flex items-center justify-between">
          <button className="p-2 text-primary bg-transparent hover:bg-primary hover:text-primary-pale transition-colors duration-300 hover:rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <span className="text-neutral-400 font-bold text-center">0</span>
          <button className="p-2 text-primary bg-transparent hover:bg-primary hover:text-primary-pale transition-colors duration-300 hover:rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <button className="w-full rounded-xl py-2 bg-primary text-primary-pale hover:bg-primary-pale hover:text-primary transition-colors duration-300 font-bold flex items-center justify-center gap-3">
          <svg
            fillRule="nonzero"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          Add to cart
        </button>
      </div>
    </article>
  );
}
