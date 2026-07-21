import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import { useAddToDoStore, useCurrentFamilyStore, useLoadingStore} from "../store/firebaseStore"
import styles from '../style/styles';
import {push, ref} from "firebase/database"
import {rtdb} from "../firebase/firebaseConfig"

const AddToDoPage = () => 
{
    const setCurrentScreen = useScreenStore((screen) => screen.setCurrentScreen);
    const addToDo = useAddToDoStore((s) => s.addToDo)
    const setAddToDo = useAddToDoStore((s) => s.setAddToDo)
    const currentFamily = useCurrentFamilyStore((s) => s.currentFamily)
    const setItemLoading = useLoadingStore((s) => s.setItemLoading)

    const handleAddChore = async () => 
    {   
        if(addToDo.trim() === "")
        {
            Alert.alert("Error", "Please write a chore")
        }
        try
        {
            await push(ref(rtdb, currentFamily?.uid),{
                chore:addToDo.trim(),
            });
            Alert.alert("Success", "A new chore is added")
            setAddToDo("");
        } catch (error: any) 
        {
            Alert.alert('Error', error.message);
        } finally 
        {
            setItemLoading(false);
        };
    };

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Add A Chore</Text>
            <TextInput 
            placeholder="Enter your chore here" 
            value = {addToDo}
            onChangeText={(text) => {setAddToDo(text)}}
            style={styles.textInput} 
            />
            <TouchableOpacity style={styles.button} onPress={() => {setCurrentScreen("home"); handleAddChore()}}>
                <Text style={styles.text}>Add A Chore!</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddToDoPage;