import React, { useEffect } from 'react';
import { View } from 'react-native';
import { subscribeToAuthChanges } from './src/firebase/auth';
import { useCurrentFamilyStore, useLoadingStore, useDeviceTokenStore } from './src/store/firebaseStore';
import { useScreenStore } from './src/store/pageStore';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import PageContainer from './src/screens/PageContainer';
import TabBar from './src/screens/TabBar';
import CreateFamilyPage from './src/screens/CreateFamilyPage';
import FamilyPage from './src/screens/FamilyPage';
import AddTodoPage from './src/screens/AddToDoPage';
import ChangePasswordPage from './src/screens/ChangePasswordPage';
import LoadingPage from './src/screens/LoadingPage';
import DeleteFamilyPage from './src/screens/DeleteFamilyPage';
import { registerForPushNotifications } from './src/firebase/notifications';

const App = () => {
  const { currentScreen, setCurrentScreen } = useScreenStore();
  const setCurrentFamily = useCurrentFamilyStore((s) => s.setCurrentFamily);
  const authLoading = useLoadingStore((s) => s.authLoading);
  const setAuthLoading = useLoadingStore((s) => s.setAuthLoading);
  const setDeviceToken = useDeviceTokenStore((s) => s.setDeviceToken);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges(async (currentUser: any) => {
      setCurrentFamily(currentUser);
      setCurrentScreen(currentUser !== null ? 'home' : 'login');
      setAuthLoading(false);

      if (currentUser?.uid) {
        const token = await registerForPushNotifications(currentUser.uid);
        setDeviceToken(token);
      } else {
        setDeviceToken(null);
      }
    });

    return unsubscribe;
  }, []);

  const screens: any = {
    home: <HomePage />,
    login: <LoginPage />,
    createfamily: <CreateFamilyPage />,
    family: <FamilyPage />,
    addtodo: <AddTodoPage />,
    changepassword: <ChangePasswordPage />,
    deletefamily: <DeleteFamilyPage />,
  };

  if (authLoading) {
    return <LoadingPage />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <PageContainer>{screens[currentScreen]}</PageContainer>
      <TabBar />
    </View>
  );
};

export default App;