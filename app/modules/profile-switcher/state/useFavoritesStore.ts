import { create } from "zustand";

interface FavoritesStoreState {
  favoriteUsers: string[];
  toggleFavorite: (id: string) => void;
  checkFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStoreState>((set, get) => ({
  favoriteUsers: [],
  toggleFavorite: (id: string) =>
    set(state => {
      const isFavorite = state.favoriteUsers.includes(id);
      if (isFavorite) {
        return {
          favoriteUsers: [
            ...state.favoriteUsers.filter(userId => userId !== id),
          ],
        };
      }
      return { favoriteUsers: [...state.favoriteUsers, id] };
    }),
  checkFavorite: (id: string) => get().favoriteUsers.includes(id),
}));
