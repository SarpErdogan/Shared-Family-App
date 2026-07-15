import { create } from "zustand";

type ScreenState = {
  currentScreen: "home" | "login" | "addtodo" | "profile";
  setScreen: (screen: "home" | "login" | "addtodo" | "profile") => void;
};

export const useScreenStore = create<ScreenState>((set:any) => ({
  currentScreen: 'login',
  setScreen: (screen:"home" | "login" | "addtodo" | "profile") => set({ currentScreen: screen }),
}));


