import React from "react";
import { View, Text, StyleSheet, Animated, FlatList, TouchableOpacity, Alert } from "react-native";
import { useScreenStore } from "../store/pageStore";
import TabBar from "./TabBar";

const slideToPage = (translateX:any, index:any, pageWidth:any, duration = 280) =>{
  Animated.timing(translateX, {
    toValue: -index * pageWidth,
    duration,
    useNativeDriver: true,
  }).start();
}
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

const HomePage = () => {
  const setScreen = useScreenStore((screen) => screen.setScreen);

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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffff',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#4A90D9',
    marginRight: 14,
  },
  label: {
    fontSize: 16,
    color: '#ffffff',
  },
  labelActive: {
    color: '#4f46e5',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#000000',
  },
});