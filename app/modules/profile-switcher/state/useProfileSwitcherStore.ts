import type {} from "@redux-devtools/extension";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User, UserSchema } from "../../user/types/user";

interface ProfileSwitcherState {
  currentUser?: User;
  signInUser: (user: User) => void;
  signOutUser: () => void;
}

export const useProfileSwitcherStore = create<ProfileSwitcherState>()(
  devtools(
    set => ({
      currentUser: undefined,
      signInUser: user => set({ currentUser: UserSchema.parse(user) }),
      signOutUser: () => set({ currentUser: undefined }),
    }),
    {
      name: "profile-switcher-store",
    },
  ),
);
