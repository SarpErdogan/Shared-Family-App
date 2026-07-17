import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useScreenStore } from '../store/pageStore';

const handleAddChore = () => {
  // will add add chore function
};

const AddToDoPage = () => {
    const setScreen = useScreenStore((screen) => screen.setScreen);

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Add A Chore</Text>
            <TextInput placeholder="Enter your chore here" placeholderTextColor="#888888" style={styles.textInput} />
            <TouchableOpacity style={styles.button} onPress={() => {setScreen("home"); handleAddChore()}}>
                <Text style={{color: '#ffffff'}}>Add A Chore!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddToDoPage;

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: '#ffffff'
  },
  icon: {
    fontSize: 22,
    color: '#9ca3af',
  },
  labelActive: {
    color: '#4f46e5',
    fontWeight: '700',
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