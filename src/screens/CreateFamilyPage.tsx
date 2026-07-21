import React, { use } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { useScreenStore } from "../store/pageStore";
import {useCreateFamilyStore, useLoadingStore, useCurrentFamilyStore} from "../store/firebaseStore";
import styles from "../style/styles"
import { signUp } from "../firebase/auth";
import { push, ref } from "firebase/database"
import { rtdb } from "../firebase/firebaseConfig"

const CreateFamilyPage = () => 
{
  const createFamilyEmail = useCreateFamilyStore((s) => s.createFamilyEmail);
  const setCreateFamilyEmail = useCreateFamilyStore((s) => s.setCreateFamilyEmail);
  const createFamilyPassword = useCreateFamilyStore((s) => s.createFamilyPassword);
  const setCreateFamilyPassword = useCreateFamilyStore((s) => s.setCreateFamilyPassword);
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const setAuthLoading  = useLoadingStore((s) => s.setAuthLoading);
  const currentFamily = useCurrentFamilyStore((s) => s.currentFamily)

  const handleCreateFamily = async () => 
  {

    const { user, error } = await signUp(createFamilyEmail, createFamilyPassword);

    if (error) 
    {
      if (error === 'auth/email-already-in-use') {
        Alert.alert("Error",'That email is already registered');
      } else if (error === 'auth/weak-password') {
        Alert.alert("Error",'Password should be at least 6 characters');
      } else {
        Alert.alert("Error",'Something went wrong, please try again');
      }
      return;
    }else
    {
      Alert.alert("Success", "Family created succesfully")
    }
    setCurrentScreen("home")
    setAuthLoading(true);
    try 
    {
      await push(ref(rtdb, currentFamily?.email));
      Alert.alert("Success","Created family todo succesfully")
    } catch (error: any) 
    {
      Alert.alert('Hata', error.message);
    } finally 
    {
      setAuthLoading(false);
    }
    setCreateFamilyEmail("");
    setCreateFamilyPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Family</Text>
      <TextInput 
      placeholder="Family E-Mail" 
      style={styles.textInput} 
      value={createFamilyEmail}
      onChangeText={(text) => setCreateFamilyEmail(text)}
      />
      <TextInput 
      placeholder="Family Password" 
      secureTextEntry={true} 
      style={styles.textInput} 
      value={createFamilyPassword}
      onChangeText={(text) => setCreateFamilyPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => {handleCreateFamily()}}>
          <Text style={styles.text}>Create Your Family!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen("login")}>
          <Text style={styles.text}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateFamilyPage;