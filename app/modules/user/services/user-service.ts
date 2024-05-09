import { User } from "../types/user";
import Request from "../../../shared/services/request";

export async function getUsers(): Promise<User[]> {
  const {
    data: { users },
  } = await Request.get<{ users: User[] }>("/users.json");

  return users;
}
