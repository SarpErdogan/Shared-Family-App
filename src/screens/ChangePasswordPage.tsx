import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useScreenStore } from "../store/pageStore";
import styles from "../style/styles"



const ChangePasswordPage = () => {
  const newInfo = ""; // will be replaced with zustand-firebase state
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);

  const setNewInfo = (info: string | null) => {
    // will add zustand-firebase state change function
  };

  const handleLoginInfoChange = () => {
  // will add change login info function
  setCurrentScreen("family");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Login Info</Text>
      <TextInput 
      placeholder={"Current Password"} 
      secureTextEntry={true}  
      style={styles.textInput} 
      value={newInfo}
      onChangeText={(text) => {
        setNewInfo(text);
      }}
      />
      <TextInput 
      placeholder={"New Password"} 
      secureTextEntry={true}  
      style={styles.textInput} 
      value={newInfo}
      onChangeText={(text) => {
        setNewInfo(text);
      }}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLoginInfoChange()}>
          <Text style={styles.text}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePasswordPage;