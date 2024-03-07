import { FC } from "react";
import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const ProtectLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
      <Navbar />
      {children}
    </div>
  );
};
export default ProtectLayout;
