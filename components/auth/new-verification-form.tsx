"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

export const NewVerificationForm: FC = ({}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token não encontrado");
      return;
    }

    newVerification(token)
      .then((res) => {
        setError(res.error);
        setSuccess(res.success);
      })
      .catch(() => {
        setError("Erro ao verificar o e-mail");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirmando seu e-mail"
      backButtonLabel="Voltar para o login"
      backButtonHref="/auth/login"
    >
      <div className="flex flex-col gap-4 items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
