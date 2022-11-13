import { useContext } from "react";
import { OpenMenuContext } from "../../context/openMenuContext";

type Props = {
  children: React.ReactNode;
};

export function Overlay({ children }: Props) {
  const ctx = useContext(OpenMenuContext);
  return (
    <div
      className={`min-h-screen z-10 absolute inset-0 bg-black/75 transition-all duration-300 ${
        ctx?.openMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {children}
    </div>
  );
}
