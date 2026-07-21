import { create } from "zustand";

type ScreenState = {
  currentScreen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo";
  setCurrentScreen: (screen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo") => void;
};

export const useScreenStore = create<ScreenState>((set:any) => ({
  currentScreen: "login",
  setCurrentScreen: (screen:"home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo") => set({ currentScreen: screen }),
})
);


