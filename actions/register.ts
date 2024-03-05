"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // TODO: Send email confirmation

  return { success: "User created" };
};