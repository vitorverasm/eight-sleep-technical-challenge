import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { User } from "../../user/types/user";

interface ProfileSwitcherState {
  currentUser?: User;
  signInUser: (user: User) => void;
  signOutUser: () => void;
}

export const useProfileSwitcherStore = create<ProfileSwitcherState>()(
  devtools(
    persist(
      set => ({
        currentUser: undefined,
        signInUser: user => set({ currentUser: user }),
        signOutUser: () => set({ currentUser: undefined }),
      }),
      {
        name: "profile-switcher-store",
      },
    ),
  ),
);
