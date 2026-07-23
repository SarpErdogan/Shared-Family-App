import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { deleteFamily } from '../firebase/auth';
import { useScreenStore } from '../store/pageStore';
import styles from '../style/styles';
import { colors } from '../style/theme';
import { useDeleteFamilyPasswordStore } from '../store/firebaseStore';

const DeleteFamilyPage = () => {
  const setCurrentScreen = useScreenStore((s) => s.setCurrentScreen);
  const password = useDeleteFamilyPasswordStore((s) => s.password);
  const setPassword = useDeleteFamilyPasswordStore((s) => s.setPassword);

  const handleDelete = () => {
    if (!password) {
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    Alert.alert(
      'Delete Account',
      'This will permanently delete your account and all data. This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const { success, error } = await deleteFamily(password);

            if (!success) {
              if (error === 'auth/wrong-password') {
                Alert.alert('Error', 'Password is incorrect');
              } else if (error === 'auth/too-many-requests') {
                Alert.alert('Error', 'Too many attempts, please try again later');
              } else {
                Alert.alert('Error', 'Could not delete account, please try again');
              }
              return;
            }
            setPassword('');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <Text style={styles.subtitle}>
        Enter your password to confirm. This action is permanent and cannot be undone.
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={colors.placeholder}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.buttonDanger} onPress={handleDelete}>
        <Text style={styles.text}>Delete Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setCurrentScreen('family'); setPassword(''); }}>
        <Text style={styles.linkText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteFamilyPage;