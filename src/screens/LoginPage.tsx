import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, TextInput } from "react-native";
import { useScreenStore } from "../store/pageStore";

const handleLogin = () => {
  // will add login function
}

const LoginPage = () => {
  const setScreen = useScreenStore((screen) => screen.setScreen);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <TextInput placeholder="Family Name" placeholderTextColor="#888888" style={styles.textInput} />
        <TextInput placeholder="Family Password" secureTextEntry={true} placeholderTextColor="#888888" style={styles.textInput} />
        <TouchableOpacity style={styles.button} onPress={() => {setScreen("home"), handleLogin()}}>
            <Text style={{color: '#ffffff'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setScreen("createfamily")}>
            <Text style={{color: '#ffffff'}}>Create Your Family!</Text>
        </TouchableOpacity>
    </View>
  );
}
export default LoginPage;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#000000',
  },
  title: {
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