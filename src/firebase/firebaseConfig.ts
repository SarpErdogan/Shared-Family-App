// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database"
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import * as firebaseAuth from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = 
{
  apiKey: "AIzaSyBCAvrzAdeONd76ziAxAhoIQK9_kIC5aIQ",
  authDomain: "family-f1923.firebaseapp.com",
  databaseURL: "https://family-f1923-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "family-f1923",
  storageBucket: "family-f1923.firebasestorage.app",
  messagingSenderId: "790226578034",
  appId: "1:790226578034:web:897e66a767188b1c81b0eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app);

const getReactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

export const auth = initializeAuth(app, 
{
  persistence: getReactNativePersistence(AsyncStorage),
});