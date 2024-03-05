import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { FC } from "react";

const SettingsPage: FC = async ({}) => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sair</Button>
      </form>
    </div>
  );
};
export default SettingsPage;
