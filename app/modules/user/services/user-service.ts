import { z } from "zod";
import Request from "../../../shared/services/request";
import { UserSchema } from "../types/user";

const GetUsersResponseSchema = z.object({
  users: UserSchema.array().nonempty({
    message: "users array is empty",
  }),
});

type GetUsersResponse = z.infer<typeof GetUsersResponseSchema>;

export async function getUsers() {
  const { data } = await Request.get<GetUsersResponse>("/users.json");

  return GetUsersResponseSchema.parse(data).users;
}
