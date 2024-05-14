import { z } from "zod";

export const UserSchema = z.object({
  id: z.string({
    required_error: "id is required",
  }),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
