import { useProfileSwitcherStore } from "../state/useProfileSwitcherStore";

export function useProfile() {
  return useProfileSwitcherStore(state => state);
}
