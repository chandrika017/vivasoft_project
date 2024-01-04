import * as z from "zod";
export const LoginSchema = z.object({
  username: z.string().min(3, { message: "Username Required" }),
  password: z
    .string()
    .min(8, { message: "Password needs to be at least 8 characters long" }),
});
