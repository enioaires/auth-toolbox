"use client";
import { FC } from "react";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage: FC = ({}) => {
  const user = useCurrentUser();
  return <UserInfo label="📱 Client component" user={user} />;
};
export default ClientPage;
