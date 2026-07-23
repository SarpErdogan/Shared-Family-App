import { User } from "firebase/auth";
import {create} from "zustand";

type DeviceTokenStore = 
{
  deviceToken: string | null;
  setDeviceToken: (token: string | null) => void;
};

type deleteFamilyPasswordStore =
{
  password: string,
  setPassword: (pass:string) => void;
}

type changePasswordStore =
{
  oldPassword:string,
  setOldPassword: (oldp:string) => void,
  newPassword:string,
  setNewPassword: (newp:string) => void,
}

type addToDoStore = 
{
  addToDo:string,
  setAddToDo:(add:string) => void;
}

type ItemStore = {
  items: { id: string; [key: string]: any }[];
  setItems: (items: { id: string; [key: string]: any }[] | ((prev: { id: string; [key: string]: any }[]) => { id: string; [key: string]: any }[])) => void;
};

type currentFamilyStore = 
{
  currentFamily:any,
  setCurrentFamily: (user:User) => void;
}

type loginInputStore = 
{
  loginFamilyEmail: string,
  setLoginFamilyEmail: (input:string) => void;
  loginFamilyPassword: string,
  setLoginFamilyPassword: (input:string) => void;

}

type familyListStore = 
{
  familyList:Array<any>,
  setFamilyList: (list:Array<any>) => void;
}

type loadingStore = 
{
  authLoading: boolean,
  setAuthLoading: (authloading: boolean) => void;
  itemLoading: boolean,
  setItemLoading: (itemLoading:boolean ) => void;
}

type createFamilyStore = 
{
  createFamilyEmail: string;
  setCreateFamilyEmail: (name: string) => void;
  createFamilyPassword: string;
  setCreateFamilyPassword: (password: string) => void;
};

export const useDeviceTokenStore = create<DeviceTokenStore>((set) => 
({
  deviceToken: null,
  setDeviceToken: (token) => set({ deviceToken: token }),
}));

export const useDeleteFamilyPasswordStore = create<deleteFamilyPasswordStore>((set:any) => 
({
  password:"",
  setPassword: (pass:string) => set({password:pass}),
})
);

export const useChangePasswordStore = create<changePasswordStore>((set:any) =>
({
  oldPassword:"",
  setOldPassword: (oldp:string) => set({oldPassword:oldp}),
  newPassword:"",
  setNewPassword: (newp:string) => set({newPassword:newp})
})
);

export const useItemStore = create<ItemStore>((set, get) => ({
  items: [],
  setItems: (items) => {
    if (typeof items === 'function') {
      set({ items: items(get().items) });
    } else {
      set({ items });
    }
  },
}));


export const useAddToDoStore = create<addToDoStore>((set:any) => 
({
  addToDo:"",
  setAddToDo:(add:string) => set({addToDo:add})
}))

export const useCurrentFamilyStore = create<currentFamilyStore>((set:any) => 
({
  currentFamily: null,
  setCurrentFamily: (user:any) => set({currentFamily:user}),
})
);

export const useLoginInputStore = create<loginInputStore>((set:any) => 
({
  loginFamilyEmail:"",
  setLoginFamilyEmail: (input:string) => set({loginFamilyEmail:input}),
  loginFamilyPassword:"",
  setLoginFamilyPassword: (input:string) => set({loginFamilyPassword:input}),
  
})
);

export const useFamilyListStore = create<familyListStore>((set:any) =>
({
  familyList: [],
  setFamilyList: (list:Array<any>) => set({familyList:list}),
})
);

export const useLoadingStore = create<loadingStore>((set:any) => 
({
  authLoading: true,
  setAuthLoading: (value) => set({ authLoading: value }),
  itemLoading: false,
  setItemLoading: (value) => set({itemLoading: value}),

})
);


export const useCreateFamilyStore = create<createFamilyStore>((set:any) => 
({
  createFamilyEmail: '',
  setCreateFamilyEmail: (name:string) => set({ createFamilyEmail: name }),
  createFamilyPassword: '',
  setCreateFamilyPassword: (password:string) => set({ createFamilyPassword: password }),
})
);

