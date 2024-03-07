"use client";
import { FC } from "react";
import { UserRole } from "@prisma/client";
import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

type Props = {
  children: React.ReactNode;
  allowedRole: UserRole;
};

export const RoleGate: FC<Props> = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="Você não tem permissão para ver este conteúdo!" />
    );
  }
  return <>{children}</>;
};
