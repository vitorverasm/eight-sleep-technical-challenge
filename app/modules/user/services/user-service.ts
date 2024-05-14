import Env from "../../../shared/config/env";
import {
  GetUsersResponse,
  GetUsersResponseSchema,
} from "../types/user-service.type";

export async function getUsers() {
  const response = await fetch(`${Env.EXPO_PUBLIC_API_URL}/users.json`, {
    method: "GET",
  });
  const data = (await response.json()) as GetUsersResponse;

  return GetUsersResponseSchema.parse(data).users;
}
