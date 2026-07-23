import { create } from "zustand";

type ScreenState = 
{
  currentScreen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changepassword" | "deletefamily";
  setCurrentScreen: (screen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changepassword" | "deletefamily") => void;
};

export const useScreenStore = create<ScreenState>((set:any) => 
({
  currentScreen: "login",
  setCurrentScreen: (screen:"home" | "login" | "addtodo" | "family" | "createfamily" | "changepassword" | "deletefamily") => set({ currentScreen: screen }),
})
);


