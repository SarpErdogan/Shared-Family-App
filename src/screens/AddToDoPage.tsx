import React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import { useAddToDoStore, useCurrentFamilyStore, useLoadingStore, useDeviceTokenStore } from '../store/firebaseStore';
import styles from '../style/styles';
import { colors } from '../style/theme';
import { push, ref } from 'firebase/database';
import { rtdb } from '../firebase/firebaseConfig';
import { sendChoreAddedNotification } from '../firebase/notifications';

const AddToDoPage = () => {
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const addToDo = useAddToDoStore((s) => s.addToDo);
  const setAddToDo = useAddToDoStore((s) => s.setAddToDo);
  const currentFamily = useCurrentFamilyStore((s) => s.currentFamily);
  const setItemLoading = useLoadingStore((s) => s.setItemLoading);
  const deviceToken = useDeviceTokenStore((s) => s.deviceToken);

  const handleAddChore = async () => {
    if (addToDo.trim() === '') {
      Alert.alert('Error', 'Please write a chore');
      return;
    }

    const choreName = addToDo.trim();

    try {
      setItemLoading(true);
      await push(ref(rtdb, currentFamily?.uid), {
        chore: choreName,
      });
      setAddToDo('');
      setCurrentScreen('home');

      if (currentFamily?.uid) {
        sendChoreAddedNotification(currentFamily.uid, choreName, deviceToken);
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setItemLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add A Chore</Text>
      <Text style={styles.subtitle}>What needs to get done?</Text>

      <TextInput
        placeholder="e.g. Take out the trash"
        placeholderTextColor={colors.placeholder}
        value={addToDo}
        onChangeText={setAddToDo}
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddChore}>
        <Text style={styles.text}>Add Chore</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCurrentScreen('home')}>
        <Text style={styles.linkText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDoPage;