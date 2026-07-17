import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useScreenStore } from "../store/pageStore";


const TabBar = () => {
  const {setScreen,currentScreen} = useScreenStore();

  return currentScreen === "login" || currentScreen === "createfamily" ? null : (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setScreen("addtodo")}}>
          <Text style={styles.icon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setScreen("home")}}>
          <Text style={styles.icon}>🏠︎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setScreen("family")}}>
          <Text style={styles.icon}>👥</Text>
        </TouchableOpacity>
      </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingBottom: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
    color: '#9ca3af',
  },
  iconActive: {
    color: '#4f46e5',
  },
  label: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 2,
  },
  labelActive: {
    color: '#4f46e5',
    fontWeight: '700',
  },
});