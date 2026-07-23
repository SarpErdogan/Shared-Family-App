import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import { useCurrentFamilyStore } from '../store/firebaseStore';
import styles from '../style/styles';
import { logout } from '../firebase/auth';

const FamilyPage = () => {
  const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
  const currentFamily = useCurrentFamilyStore((s) => s.currentFamily);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Family</Text>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Family E-Mail</Text>
        <Text style={styles.labelActive}>    {currentFamily?.email}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Family Password</Text>
        <Text style={styles.labelActive}>    ••••••••</Text>
      </View>

      <TouchableOpacity style={styles.row} onPress={() => setCurrentScreen('changepassword')}>
        <Text style={styles.rowLabel}>Change Password</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          Alert.alert(
            'Leave Family',
            'Are you sure you want to leave the family?',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Leave',
                onPress: () => {
                  logout();
                  setCurrentScreen('login');
                },
                style: 'destructive',
              },
            ]
          );
        }}
      >
        <Text style={styles.importantText}>Leave Family</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => setCurrentScreen('deletefamily')}>
        <Text style={styles.importantText}>Delete Family</Text>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default FamilyPage;