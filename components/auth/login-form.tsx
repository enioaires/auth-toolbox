import { FC } from "react";
import { CardWrapper } from "./card-wrapper";

type Props = {};

export const LoginForm: FC<Props> = ({}) => {
  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel="Ainda não possui uma conta?"
      backButtonHref="/auth/register"
      showSocials
    >
      Wrapper
    </CardWrapper>
  );
};
