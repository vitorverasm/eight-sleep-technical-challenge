import useSWR from "swr";
import { getSessionsByUserId } from "../services/session-service";
import { useMemo } from "react";
import { getLatestSession } from "../utils/get-latest-session";

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

  const latestSessionDate = useMemo(() => {
    if (data && data?.length > 0) {
      const latestSession = getLatestSession(data);
      return new Date(latestSession.ts);
    }
  }, [data]);

  return {
    sessions: data,
    isLoading,
    error,
    latestSessionDate,
  };
}
