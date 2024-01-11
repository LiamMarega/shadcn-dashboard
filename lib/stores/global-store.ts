import { create } from "zustand";

export type State = {
  loading: boolean;
};

export type Actions = {
  setLoading: (loading: boolean) => void;
};

export const useGlobalStore = create<State & Actions>()((set) => ({
  loading: false,
  setLoading: (loading: boolean) => {
    console.log("loading", loading);

    set({ loading });
  },
}));
