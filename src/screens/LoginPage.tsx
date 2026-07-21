import React, {useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { useLoginInputStore } from "../store/firebaseStore"
import { useScreenStore } from "../store/pageStore";
import styles from "../style/styles";
import {login} from "../firebase/auth"

const LoginPage = () => 
{
  
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const loginFamilyEmail = useLoginInputStore((s) => s.loginFamilyEmail);
  const setLoginFamilyEmail = useLoginInputStore((s) => s.setLoginFamilyEmail);
  const loginFamilyPassword = useLoginInputStore((s) => s.loginFamilyPassword);
  const setLoginFamilyPassword = useLoginInputStore((s) => s.setLoginFamilyPassword);

  const handleLogin = async (email:string,password:string) => 
  {
    const { user, error } = await login(email,password);

    if (error) 
    {
      Alert.alert('Error', error);
      return;
    }else
    {
      Alert.alert("Success", "Logged in succesfully");
      setCurrentScreen("home");
      setLoginFamilyEmail("");
      setLoginFamilyPassword("");
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <TextInput 
        placeholder="E-Mail" 
        value={loginFamilyEmail}
        style={styles.textInput} 
        onChangeText={(text) => setLoginFamilyEmail(text)}
        />
        <TextInput 
        placeholder="Password" 
        secureTextEntry={true} 
        value={loginFamilyPassword}
        style={styles.textInput} 
        onChangeText={(text) => setLoginFamilyPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => {handleLogin(loginFamilyEmail,loginFamilyPassword)}}>
            <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {setCurrentScreen("createfamily"), setLoginFamilyEmail(""), setLoginFamilyPassword("")} }>
            <Text style={styles.text}>Create Your Family!</Text>
        </TouchableOpacity>
    </View>
  );

};
export default LoginPage;