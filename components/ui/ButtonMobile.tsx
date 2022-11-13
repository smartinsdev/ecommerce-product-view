import { useState } from "react";

export function ButtonMobile() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-10 w-10 block md:hidden">
      <button
        className="w-full h-full p-1 flex flex-col justify-center items-center"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span
          className={`line ${openMenu ? "rotate-45 translate-y-1" : ""}`}
        ></span>
        <span
          className={`line ${openMenu ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`line ${openMenu ? "-rotate-45 -translate-y-3" : ""}`}
        ></span>
      </button>
    </div>
  );
}
