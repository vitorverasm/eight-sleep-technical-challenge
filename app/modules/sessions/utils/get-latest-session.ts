import { SleepSession } from "../types/sleep-session.type";

/**
 * getLatestSession
 *
 * Session data are returned in descending order, so the first element in the array is the latest session.
 *
 * @param sessions
 * @returns
 */
export function getLatestSession(sessions: SleepSession[]) {
  return sessions[0];
}
