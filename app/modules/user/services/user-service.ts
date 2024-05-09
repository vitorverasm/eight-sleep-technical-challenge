import Request from "../../../shared/services/request";
import {
  GetUsersResponse,
  GetUsersResponseSchema,
} from "../types/user-service";

export async function getUsers() {
  const { data } = await Request.get<GetUsersResponse>("/users.json");

  return GetUsersResponseSchema.parse(data).users;
}
