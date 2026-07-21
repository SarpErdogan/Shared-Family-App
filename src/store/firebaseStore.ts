import { User } from "firebase/auth";
import {create} from "zustand";

type currentFamilyStore = {
  currentFamily:any,
  setCurrentFamily: (user:User) => void;
}

type loginInputStore = {
  loginFamilyEmail: string,
  setLoginFamilyEmail: (input:string) => void;
  loginFamilyPassword: string,
  setLoginFamilyPassword: (input:string) => void;

}

type familyListStore = {
  familyList:Array<any>,
  setFamilyList: (list:Array<any>) => void;
}

type loadingStore = {
  loading: boolean,
  setLoading: (loading: boolean) => void;
}

type createFamilyStore = {
  createFamilyEmail: string;
  setCreateFamilyEmail: (name: string) => void;
  createFamilyPassword: string;
  setCreateFamilyPassword: (password: string) => void;
};

export const useCurrentFamilyStore = create<currentFamilyStore>((set:any) => ({
  currentFamily: null,
  setCurrentFamily: (user:any) => set({currentFamily:user}),
})
);

export const useLoginInputStore = create<loginInputStore>((set:any) => ({
  loginFamilyEmail:"",
  setLoginFamilyEmail: (input:string) => set({loginFamilyEmail:input}),
  loginFamilyPassword:"",
  setLoginFamilyPassword: (input:string) => set({loginFamilyPassword:input}),
  
})
);

export const useFamilyListStore = create<familyListStore>((set:any) => ({
  familyList: [],
  setFamilyList: (list:Array<any>) => set({familyList:list}),
})
);

export const useLoadingStore = create<loadingStore>((set:any) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
})
);

export const useCreateFamilyStore = create<createFamilyStore>((set:any) => ({
  createFamilyEmail: '',
  setCreateFamilyEmail: (name:string) => set({ createFamilyEmail: name }),
  createFamilyPassword: '',
  setCreateFamilyPassword: (password:string) => set({ createFamilyPassword: password }),
})
);

