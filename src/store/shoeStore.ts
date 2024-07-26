import { User } from "../types/types";
import { create } from "zustand";

type State = {
  user: User | null;
};

type Action = {
  logOut: () => void;
  logIn: (user: User) => void;
};

export const useShoeStore = create<State & Action>((set) => ({
  user: null,
  logIn: (user: User) => set({ user }),
  logOut: () => set({ user: null }),
}));
