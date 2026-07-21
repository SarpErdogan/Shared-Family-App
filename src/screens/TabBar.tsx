import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useScreenStore } from "../store/pageStore";
import styles from "../style/styles";

const TabBar = () => 
{
  const setCurrentScreen = useScreenStore((s) => s.setCurrentScreen)
  const currentScreen = useScreenStore((s) => s.currentScreen);

  return currentScreen === "login" || currentScreen === "createfamily" ? null : (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setCurrentScreen("addtodo")}}>
          <Text style={styles.icon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setCurrentScreen("home")}}>
          <Text style={styles.icon}>🏠︎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {setCurrentScreen("family")}}>
          <Text style={styles.icon}>👥</Text>
        </TouchableOpacity>
      </View>
  );
}

export default TabBar;
