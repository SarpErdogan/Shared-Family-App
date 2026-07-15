import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useScreenStore } from './src/store/pageStore';
import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';
import PageContainer from './src/screens/PageContainer';
import TabBar from './src/screens/TabBar';
import CreateFamilyPage from './src/screens/CreateFamilyPage';

export default function App() {
  const { currentScreen } = useScreenStore();

  const screens: any = {
    home: <HomePage />,
    login: <LoginPage />,
    createfamily: <CreateFamilyPage />,
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