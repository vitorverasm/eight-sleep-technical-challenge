import useSWR from "swr";
import { getSessionsByUserId } from "../services/session-service";

export function useSessions(userId?: string) {
  const { data, error, isLoading } = useSWR(
    `/${userId}.json`,
    () =>
      getSessionsByUserId({
        userId,
      }),
    {
      shouldRetryOnError: false,
    },
  );

  return {
    sessions: data,
    isLoading,
    error,
  };
}
