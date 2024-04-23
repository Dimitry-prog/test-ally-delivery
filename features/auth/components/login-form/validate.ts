import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Обязательное поле").email("Не верный имейл"),
  password: z.string().min(1, "Обязательное поле"),
});

export type LoginFormType = z.infer<typeof loginSchema>;
