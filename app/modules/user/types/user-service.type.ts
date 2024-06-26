import { z } from "zod";
import { UserSchema } from "./user.type";

export const GetUsersResponseSchema = z.object({
  users: UserSchema.array().nonempty({
    message: "users array is empty",
  }),
});

export type GetUsersResponse = z.infer<typeof GetUsersResponseSchema>;
