import useSWR from "swr";
import { getUsers } from "../services/user-service";

export function useUsers() {
  const { data, error, isLoading } = useSWR("/users.json", getUsers, {
    shouldRetryOnError: false,
  });

  return {
    users: data,
    isLoading,
    error,
  };
}
