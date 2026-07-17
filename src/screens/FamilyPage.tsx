import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useLoginInfoChangerStore, useScreenStore, } from '../store/pageStore';

const handleLeaveFamily = () => {
  // will add leave family function
};

const FamilyPage = () => {
    const setScreen = useScreenStore((screen) => screen.setScreen);
    const { infoChanged, setInfoChanged } = useLoginInfoChangerStore();

    const familyName:string = "Family Name"; //will be replaced with zustand-firebase state
    const familyPassword:string = "Family Password"; //will be replaced with zustand-firebase state

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Your Family</Text>
            <TouchableOpacity style={styles.row} onPress={() => {setScreen("changeLoginInfo"), setInfoChanged("name")}}>
              <View style={{backgroundColor: '#000000', marginRight: 12, padding: 4, borderRadius: 4}}>
                <Text style={styles.icon}>Family Name:</Text>
              </View>
              <Text style={styles.labelActive}>{familyName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => {setScreen("changeLoginInfo"), setInfoChanged("password")}}>
              <View style={{backgroundColor: '#000000', marginRight: 12, padding: 4, borderRadius: 4}}>
                <Text style={styles.icon}>Family Password:</Text>
              </View>
              <Text style={styles.labelActive}>{"*".repeat(familyPassword.length)}</Text>
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
                                handleLeaveFamily();
                                setScreen('login');
                            },
                            style: "destructive"
                        }
                    ]
                );
            }}>
              <View style={{backgroundColor: '#000000', marginRight: 12, padding: 4, borderRadius: 4}}>
                <Text style={styles.icon}>Leave Family</Text>
              </View>
            </TouchableOpacity> 
        </View>
    );
};

export default FamilyPage;

const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
    color: '#9ca3af',
  },
  labelActive: {
    color: '#4f46e5',
    fontWeight: '700',
    fontSize: 15,
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffff',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#4A90D9',
    marginRight: 14,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
});