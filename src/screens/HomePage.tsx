import React from "react";
import { View, Text, StyleSheet, Animated, FlatList, TouchableOpacity, Alert } from "react-native";
import { useScreenStore } from "../store/pageStore";
import TabBar from "./TabBar";
import styles from "../style/styles";

const HomePage = () => {
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);

  const handleCheck = (item: any) => {
    Alert.alert(
      'Are you sure?',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive' },
      ]
    );
  };

  return (
    <View style={styles.container}>
        <Text style = {styles.title}>Your Family's Chores</Text>
        <FlatList
          data="a"
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row} onPress={() => handleCheck(item)}>
              <View style={styles.checkbox} />
              <Text style={styles.labelActive}>a</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
}
export default HomePage;