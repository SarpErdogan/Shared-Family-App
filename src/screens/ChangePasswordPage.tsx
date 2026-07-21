import React from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import { useScreenStore } from "../store/pageStore";
import { useChangePasswordStore } from "../store/firebaseStore"
import { changePassword } from "../firebase/auth"

import styles from "../style/styles"

const ChangePasswordPage = () => 
{
  const oldPassword = useChangePasswordStore((s) => s.oldPassword);
  const setOldPassword = useChangePasswordStore((s) => s.setOldPassword);
  const newPassword = useChangePasswordStore((s) => s.newPassword);
  const setNewPassword = useChangePasswordStore((s) => s.setNewPassword)
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);

  const handleChangePassword = async () => 
  {
    const { success, error } = await changePassword(oldPassword, newPassword);

    if (!success) 
    {
      if (error === 'auth/wrong-password') 
      {
        Alert.alert('Error', 'Current password is incorrect');
      } else if (error === 'auth/weak-password') 
      {
        Alert.alert('Error', 'New password is too weak (min 6 characters)');
      } else 
      {
        Alert.alert('Error', 'Could not change password, please try again');
      }
      return;
    }

    Alert.alert('Success', 'Password changed successfully');
    setCurrentScreen("family")
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Login Info</Text>
      <TextInput 
      placeholder={"Current Password"} 
      secureTextEntry={true}  
      style={styles.textInput} 
      value={oldPassword}
      onChangeText={(text) => {
        setOldPassword(text);
      }}
      />
      <TextInput 
      placeholder={"New Password"} 
      secureTextEntry={true}  
      style={styles.textInput} 
      value={newPassword}
      onChangeText={(text) => {
        setNewPassword(text);
      }}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleChangePassword()}>
          <Text style={styles.text}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ChangePasswordPage;