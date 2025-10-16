import { z } from "zod";

export const formInput = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email().min(1, "Please enter your email"),
  message: z.string().min(1, "Please enter a message"),
});
