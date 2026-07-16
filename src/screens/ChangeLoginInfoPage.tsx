import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useLoginInfoChangerStore, useScreenStore } from "../store/pageStore";

const handleLoginInfoChange = (infoChanged: string | null) => {
  const setScreen = useScreenStore((screen) => screen.setScreen);
  // will add change login info function
  setScreen("family");
};

const ChangeLoginInfoPage = () => {
  const infoChanged = useLoginInfoChangerStore((state) => state.infoChanged);
  const newInfo = ""; // will be replaced with zustand-firebase state
  const setNewInfo = (info: string | null) => {
    // will add zustand-firebase state change function
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Login Info</Text>
      <TextInput 
      placeholder={infoChanged === "password" ? "New Family Password" : "New Family Name"} 
      secureTextEntry={infoChanged === "password" ? true : false} 
      placeholderTextColor="#888888" 
      style={styles.textInput} 
      value={newInfo}
      onChangeText={(text) => {
        setNewInfo(text);
      }}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLoginInfoChange(infoChanged)}>
          <Text style={{color: '#ffffff'}}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangeLoginInfoPage;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#000000',
  },
  title:{
    color: '#ffffff', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: '#ffffff'
  },
  
});