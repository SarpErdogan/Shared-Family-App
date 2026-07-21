import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import styles from '../style/styles';

const AddToDoPage = () => {
    const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);

    const handleAddChore = () => {
     // will add add chore function
    };

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Add A Chore</Text>
            <TextInput 
            placeholder="Enter your chore here" 
            style={styles.textInput} 
            />
            <TouchableOpacity style={styles.button} onPress={() => {setCurrentScreen("home"); handleAddChore()}}>
                <Text style={styles.text}>Add A Chore!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddToDoPage;