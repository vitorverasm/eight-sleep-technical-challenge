import useSWR from "swr";
import { getUsers } from "../services/user-service";

export function useUsers() {
  const { data, error, isLoading } = useSWR("/users", getUsers, {
    shouldRetryOnError: false,
  });

  return {
    users: data,
    isLoading,
    error,
  };
}
