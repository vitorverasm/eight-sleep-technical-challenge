import { useCallback } from "react";
import { useProfile } from "../../profile-switcher/hooks/useProfile";
import { useSessionDataStore } from "../state/useSessionDataStore";
import { useSessions } from "./useSessions";

export function useSelectedSession() {
  const { currentUser } = useProfile();
  const { sessions } = useSessions(currentUser?.id);
  const { setCurrentDate, setSessionData, sessionData, date } =
    useSessionDataStore(state => state);

  const syncSessionDataByDate = useCallback(
    (newDate: Date) => {
      setCurrentDate(newDate);
      const matchSession = sessions?.find(
        session =>
          new Date(session.ts).toDateString() === newDate.toDateString(),
      );
      if (matchSession) {
        setSessionData(matchSession);
      } else {
        setSessionData(undefined);
      }
    },
    [sessions, setCurrentDate, setSessionData],
  );

  return {
    syncSessionDataByDate,
    sessionData,
    date,
  };
}
