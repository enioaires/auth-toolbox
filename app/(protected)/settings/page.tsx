"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { FC } from "react";

const SettingsPage: FC = ({}) => {
  const session = useSession();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <div>
      {JSON.stringify(session)}
      <Button onClick={handleSignOut}>Sair</Button>
    </div>
  );
};
export default SettingsPage;
