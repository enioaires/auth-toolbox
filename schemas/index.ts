import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(1, "Insira uma senha"),
  code: z.string().optional(),
});

export const RegisterSchema = z.object({
  email: z.string().email("Insira um email válido"),
  name: z.string().min(3, "Nome é obrigatório"),
  password: z.string().min(6, "Insira uma senha com no mínimo 6 caracteres"),
});

export const ResetSchema = z.object({
  email: z.string().email("Insira um email válido"),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, "Insira uma senha com no mínimo 6 caracteres"),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(
      z.string().min(6, "Insira uma senha com no mínimo 6 caracteres")
    ),
    newPassword: z.optional(
      z.string().min(6, "Insira uma senha com no mínimo 6 caracteres")
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Nova senha é obrigatória!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Senha atual é obrigatória!",
      path: ["password"],
    }
  );
