import type {} from "@redux-devtools/extension";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SleepSession } from "../types/sleep-session";

interface SessionDataState {
  date: Date;
  sessionData?: SleepSession;
  setCurrentDate: (newDate: Date) => void;
  setSessionData: (sessionData?: SleepSession) => void;
}

export const useSessionDataStore = create<SessionDataState>()(
  devtools(
    set => ({
      date: new Date(),
      sessionData: undefined,
      setCurrentDate: (newDate: Date) => set({ date: newDate }),
      setSessionData: (sessionData?: SleepSession) => set({ sessionData }),
    }),
    {
      name: "session-data-store",
    },
  ),
);
