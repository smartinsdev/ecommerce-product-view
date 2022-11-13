import { useContext } from "react";
import { OpenMenuContext } from "../../context/openMenuContext";

export function ButtonMobile() {
  const ctx = useContext(OpenMenuContext);
  return (
    <div className="h-10 w-10 z-30 block md:hidden">
      <button
        className="w-full h-full p-1 flex flex-col justify-center items-center"
        onClick={() => ctx?.toogleMenu()}
      >
        <span
          className={`line ${ctx?.openMenu ? "rotate-45 translate-y-1" : ""}`}
        ></span>
        <span
          className={`line ${ctx?.openMenu ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`line ${ctx?.openMenu ? "-rotate-45 -translate-y-3" : ""}`}
        ></span>
      </button>
    </div>
  );
}
