"use client";
import { logout } from "@/actions/logout";
import { LogoutButton } from "@/components/auth/logout-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FC } from "react";

const SettingsPage: FC = ({}) => {
  const user = useCurrentUser();

  const handleSignOut = () => {
    logout();
  };

  return <></>;
};
export default SettingsPage;
