import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, TextInput } from "react-native";
import { useScreenStore } from "../store/pageStore";

const LoginPage = () => {
  const setScreen = useScreenStore((screen) => screen.setScreen);

  return (
    <View style={styles.container}>
        <Text style={{color: '#ffffff', fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>Log in</Text>
        <TextInput placeholder="Family Name" style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: '#ffffff'}} />
        <TextInput placeholder="Family Password" secureTextEntry={true} style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: '#ffffff'}} />
        <TouchableOpacity style={{height: 40, backgroundColor: '#4f46e5', justifyContent: 'center', alignItems: 'center', marginBottom: 10}} onPress={() => setScreen("home")}>
            <Text style={{color: '#ffffff'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 40, backgroundColor: '#9ca3af', justifyContent: 'center', alignItems: 'center'}} onPress={() => setScreen("createfamily")}>
            <Text style={{color: '#000000'}}>Create Your Family!</Text>
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
});