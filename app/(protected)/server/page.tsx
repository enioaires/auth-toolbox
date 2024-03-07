import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { FC } from "react";

const ServerPage: FC = async ({}) => {
  const user = await currentUser();

  return <UserInfo label="💻 Server component" user={user} />;
};
export default ServerPage;
