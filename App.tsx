import React, { useEffect } from 'react';
import { View,Alert } from 'react-native';
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

export default function App() {
  const { currentScreen, setCurrentScreen } = useScreenStore();
  const { currentFamily, setCurrentFamily } = useCurrentFamilyStore();
  const { loading, setLoading } = useLoadingStore();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser: any) => {
      setCurrentFamily(currentUser);
      setCurrentScreen(currentUser !== null ? "home" : "login");
      setLoading(false);
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

  if (loading) {
    return <View style={{ flex: 1, backgroundColor: '#000000' }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <PageContainer>
        {screens[currentScreen]}
      </PageContainer>
      <TabBar />
    </View>
  );
}