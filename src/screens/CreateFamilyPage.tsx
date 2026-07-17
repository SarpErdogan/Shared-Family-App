import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useScreenStore } from "../store/pageStore";

const handleCreateFamily = () => {
  // will add create family function
};

const CreateFamilyPage = () => {
  const setScreen = useScreenStore((screen) => screen.setScreen);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Family</Text>
      <TextInput placeholder="Family Name" placeholderTextColor="#888888" style={styles.textInput} />
      <TextInput placeholder="Family Password" secureTextEntry={true} placeholderTextColor="#888888" style={styles.textInput} />
      <TouchableOpacity style={styles.button} onPress={() => {setScreen("home"); handleCreateFamily()}}>
          <Text style={{color: '#ffffff'}}>Create Your Family!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setScreen("login")}>
          <Text style={{color: '#ffffff'}}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CreateFamilyPage;

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

