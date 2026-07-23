import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useLoginInputStore } from '../store/firebaseStore';
import { useScreenStore } from '../store/pageStore';
import styles from '../style/styles';
import { colors } from '../style/theme';
import { login } from '../firebase/auth';

const LoginPage = () => {
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const loginFamilyEmail = useLoginInputStore((s) => s.loginFamilyEmail);
  const setLoginFamilyEmail = useLoginInputStore((s) => s.setLoginFamilyEmail);
  const loginFamilyPassword = useLoginInputStore((s) => s.loginFamilyPassword);
  const setLoginFamilyPassword = useLoginInputStore((s) => s.setLoginFamilyPassword);

  const handleLogin = async (email: string, password: string) => {
    const { user, error } = await login(email, password);

    if (error) {
      Alert.alert('Error', error);
      return;
    }

    setLoginFamilyEmail('');
    setLoginFamilyPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Log in to your family account</Text>

      <TextInput
        placeholder="E-Mail"
        placeholderTextColor={colors.placeholder}
        value={loginFamilyEmail}
        style={styles.textInput}
        onChangeText={setLoginFamilyEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        value={loginFamilyPassword}
        style={styles.textInput}
        onChangeText={setLoginFamilyPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(loginFamilyEmail, loginFamilyPassword)}
      >
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => {
          setCurrentScreen('createfamily');
          setLoginFamilyEmail('');
          setLoginFamilyPassword('');
        }}
      >
        <Text style={styles.textSecondary}>Create Your Family</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;