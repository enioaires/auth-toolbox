"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton: FC<Props> = ({
  children,
  mode = "redirect",
  asChild = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  return (
    <span className="cursor-pointer" onClick={handleClick}>
      {children}
    </span>
  );
};
