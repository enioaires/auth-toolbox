import { FC } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";

type Props = {};

export const ErrorCard: FC<Props> = ({}) => {
  return (
    <CardWrapper
      headerLabel="Oops! Algo deu errado"
      backButtonHref="/auth/login"
      backButtonLabel="Voltar para a página de login"
    >
      <div className="w-full items-center flex justify-center">
        <ExclamationTriangleIcon className="w-10 h-10 text-destructive" />
      </div>
    </CardWrapper>
  );
};
