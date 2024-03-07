"use client";

import { FC } from "react";
import { logout } from "@/actions/logout";

type Props = {
  children?: React.ReactNode;
};

export const LogoutButton: FC<Props> = ({ children }) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
