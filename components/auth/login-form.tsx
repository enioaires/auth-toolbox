"use client";
import { FC, Fragment, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const LoginForm: FC = ({}) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked" &&
    "Email já cadastrado.";

  const [isPending, startTransition] = useTransition();

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((res) => {
          if (res?.error) {
            form.reset();
            setError(res.error);
          }

          if (res?.success) {
            form.reset();
            setSuccess(res.success);
          }

          if (res?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Erro ao fazer login"));
    });
  }

  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel={showTwoFactor ? "" : "Ainda não tem conta? Cadastre-se"}
      backButtonHref="/auth/register"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {showTwoFactor && (
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center">
                  <FormLabel>Código 2FA</FormLabel>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      render={({ slots }) => (
                        <InputOTPGroup>
                          {slots.map((slot, index) => (
                            <InputOTPSlot key={index} {...slot} />
                          ))}
                        </InputOTPGroup>
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <Fragment>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} type="password" {...field} />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Esqueci minha senha</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Fragment>
          )}
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button disabled={isPending} className="w-full" type="submit">
            {showTwoFactor ? "Confirmar" : "Entrar"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
