"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton: FC<Props> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span className="cursor-pointer" onClick={handleClick}>
      {children}
    </span>
  );
};
