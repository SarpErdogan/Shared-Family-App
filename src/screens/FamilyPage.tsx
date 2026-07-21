import React, { use } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import { useCurrentFamilyStore } from "../store/firebaseStore"
import styles from "../style/styles";
import { logout } from '../firebase/auth';

const FamilyPage = () => {
    const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
    const currentFamily = useCurrentFamilyStore((s) => s.currentFamily);


    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Your Family</Text>
            <TouchableOpacity style={styles.row} onPress={() => {}}>
              <View style={styles.familyInfo}>
                <Text style={styles.icon}>Family E-Mail:</Text>
              </View>
              <Text style={styles.labelActive}>{currentFamily?.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => setCurrentScreen("changeLoginInfo")}>
              <View style={styles.familyInfo}>
                <Text style={styles.icon}>Family Password:</Text>
              </View>
              <Text style={styles.labelActive}>{"********"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => {
                Alert.alert(
                    "Leave Family",
                    "Are you sure you want to leave the family?",
                    [
                        {
                            text: "Cancel",
                            style: "cancel"
                        },
                        {
                            text: "Leave",
                            onPress: () => {
                                logout();
                                setCurrentScreen('login');
                            },
                            style: "destructive"
                        }
                    ]
                );
            }}>
              <View style={styles.familyInfo}>
                <Text style={styles.icon}>Leave Family</Text>
              </View>
            </TouchableOpacity> 
        </View>
    );
};

export default FamilyPage;