import React, { useEffect } from 'react';
import { View,Text } from 'react-native';
import { subscribeToAuthChanges } from "./src/firebase/auth"
import { useCurrentFamilyStore, useLoadingStore } from "./src/store/firebaseStore"
import { useScreenStore } from './src/store/pageStore';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import PageContainer from './src/screens/PageContainer';
import TabBar from './src/screens/TabBar';
import CreateFamilyPage from './src/screens/CreateFamilyPage';
import FamilyPage from './src/screens/FamilyPage';
import AddTodoPage from './src/screens/AddToDoPage';
import ChangePasswordPage from './src/screens/ChangePasswordPage';

const App = () =>
{
  const { currentScreen, setCurrentScreen } = useScreenStore();
  const  setCurrentFamily  = useCurrentFamilyStore((s) => s.setCurrentFamily);
  const authLoading = useLoadingStore((s) => s.authLoading);
  const setAuthLoading  = useLoadingStore((s) => s.setAuthLoading);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser: any) => 
    {
      setCurrentFamily(currentUser);
      setCurrentScreen(currentUser !== null ? "home" : "login");
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  const screens: any = {
    home: <HomePage />,
    login: <LoginPage />,
    createfamily: <CreateFamilyPage />,
    family: <FamilyPage />,
    addtodo: <AddTodoPage />,
    changeLoginInfo: <ChangePasswordPage />,
  };

  if (authLoading) 
  {
    return (
      <View style={{ flex: 1, backgroundColor: '#000000',alignContent:"center" }}>
        <Text style={{color:"#ffffff",alignContent:"center"}}>loading</Text>
      </View>
    )
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <PageContainer>
        {screens[currentScreen]}
      </PageContainer>
      <TabBar />
    </View>
  );
}

export default App;