import { useState } from "react";
import Image from "next/image";

import { ButtonCart, DropBox, ButtonMobile, Logo } from "../ui";

import avatar from "../../public/images/image-avatar.png";
import { NavItens } from "./NavItens";

export function NavBar() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <nav className="relative h-full flex items-center justify-between px-6 md:px-0">
      <div className="flex items-center space-x-4 md:space-x-0 md:gap-10">
        <ButtonMobile />
        <Logo />
        <NavItens />
      </div>
      <div className="flex items-center justify-center space-x-4">
        <ButtonCart onClick={() => setOpenCart(!openCart)} />
        <div className="w-12 h-12 overflow-hidden rounded-full cursor-pointer border-2 border-neutral-200 transition-all duration-300 hover:border-primary">
          <Image src={avatar} alt="Username avatar" />
        </div>
      </div>
      <DropBox openCart={openCart} />
    </nav>
  );
}
