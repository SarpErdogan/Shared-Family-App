import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import { useCreateFamilyStore } from '../store/firebaseStore';
import { signUp } from '../firebase/auth';
import { push, ref } from 'firebase/database';
import { rtdb } from '../firebase/firebaseConfig';
import styles from '../style/styles';
import { colors } from '../style/theme';

const CreateFamilyPage = () => {
  const createFamilyEmail = useCreateFamilyStore((s) => s.createFamilyEmail);
  const setCreateFamilyEmail = useCreateFamilyStore((s) => s.setCreateFamilyEmail);
  const createFamilyPassword = useCreateFamilyStore((s) => s.createFamilyPassword);
  const setCreateFamilyPassword = useCreateFamilyStore((s) => s.setCreateFamilyPassword);
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const [submitting, setSubmitting] = useState(false);

  const handleCreateFamily = async () => {
    setSubmitting(true);

    const { user, error } = await signUp(createFamilyEmail, createFamilyPassword);

    if (error) {
      setSubmitting(false);
      if (error === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email is already registered');
      } else if (error === 'auth/weak-password') {
        Alert.alert('Error', 'Password should be at least 6 characters');
      } else {
        Alert.alert('Error', 'Something went wrong, please try again');
      }
      return;
    }

    try {
      await push(ref(rtdb, user?.uid));
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setSubmitting(false);
    }

    setCreateFamilyEmail('');
    setCreateFamilyPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Family</Text>
      <Text style={styles.subtitle}>Set up a shared account for your household</Text>

      <TextInput
        placeholder="Family E-Mail"
        placeholderTextColor={colors.placeholder}
        style={styles.textInput}
        value={createFamilyEmail}
        onChangeText={setCreateFamilyEmail}
        editable={!submitting}
      />
      <TextInput
        placeholder="Family Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry
        style={styles.textInput}
        value={createFamilyPassword}
        onChangeText={setCreateFamilyPassword}
        editable={!submitting}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateFamily} disabled={submitting}>
        {submitting ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.text}>Create Your Family</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => setCurrentScreen('login')}
        disabled={submitting}
      >
        <Text style={styles.textSecondary}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateFamilyPage;