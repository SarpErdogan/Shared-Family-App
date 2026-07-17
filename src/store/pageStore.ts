import { create } from "zustand";

type loginInfoChangerState = {
  infoChanged: "name" | "password" | "";
  setInfoChanged: (info: string) => void;
};

type ScreenState = {
  currentScreen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo";
  setScreen: (screen: "home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo") => void;
};

export const useLoginInfoChangerStore = create<loginInfoChangerState>((set:any) => ({
  infoChanged: '',
  setInfoChanged: (info:string) => set({ infoChanged: info }),
})
);

export const useScreenStore = create<ScreenState>((set:any) => ({
  currentScreen: 'login',
  setScreen: (screen:"home" | "login" | "addtodo" | "family" | "createfamily" | "changeLoginInfo") => set({ currentScreen: screen }),
})
);


