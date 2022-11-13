import React, { useState } from "react";
import { OpenMenuContext } from "../context/openMenuContext";

type Props = {
  children: React.ReactNode;
};

export const OpenMenuProvider = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toogleMenu = () => setOpenMenu(!openMenu);
  return (
    <OpenMenuContext.Provider value={{ openMenu, toogleMenu }}>
      {props.children}
    </OpenMenuContext.Provider>
  );
};
