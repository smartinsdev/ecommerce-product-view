import { useContext } from "react";
import { OpenMenuContext } from "../../context/openMenuContext";
import { NavItens } from "../header/NavItens";
import { Overlay } from "./Overlay";

export function SideBar() {
  const ctx = useContext(OpenMenuContext);
  return (
    <Overlay>
      <div
        className={`${
          ctx?.openMenu
            ? "translate-x-0 visible"
            : "-translate-x-full invisible"
        } min-h-screen w-[45%] bg-white z-20 transition-all ease-in-out duration-300 border-l-2 overflow-x-hidden pt-20 px-4`}
      >
        <NavItens
          classesContainer="flex flex-col space-y-1"
          classesLink="capitalize block w-full py-3 px-4 text-lg font-bold text-neutral-400 transition-colors duration-300 hover:text-primary"
        />
      </div>
    </Overlay>
  );
}
