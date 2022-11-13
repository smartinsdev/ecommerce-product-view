import React from "react";

type OpenMenuProps = {
  openMenu: boolean;
  toogleMenu: () => void;
};

export const OpenMenuContext = React.createContext<OpenMenuProps | null>(null);
