import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(1, "Insira uma senha"),
});

export const RegisterSchema = z.object({
  email: z.string().email("Insira um email válido"),
  name: z.string().min(3, "Nome é obrigatório"),
  password: z.string().min(6, "Insira uma senha com no mínimo 6 caracteres"),
});
