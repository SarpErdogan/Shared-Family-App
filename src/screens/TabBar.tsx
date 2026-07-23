import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import styles from '../style/styles';

const tabs = [
  { key: 'home', icon: '🏠︎', label: 'Home' },
  { key: 'family', icon: '👥', label: 'Family' },
] as const;

const TabBar = () => {
  const setCurrentScreen = useScreenStore((s) => s.setCurrentScreen);
  const currentScreen = useScreenStore((s) => s.currentScreen);

  if (currentScreen === 'login' || currentScreen === 'createfamily') return null;

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabButton}
            onPress={() => setCurrentScreen(tab.key)}
          >
            <Text style={isActive ? styles.tabIconActive : styles.icon}>{tab.icon}</Text>
            <Text style={isActive ? styles.tabLabelActive : styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;