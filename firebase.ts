import {
    initializeAuth,
    // @ts-ignore
    getReactNativePersistence,
  } from "firebase/auth";
import firebase from "firebase/compat";
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
    apiKey: "AIzaSyDsoWzojdFkm5sailOWxBH5q2-1HZYIUYI",
    authDomain: "laboratory-app-ac1ba.firebaseapp.com",
    projectId: "laboratory-app-ac1ba",
    storageBucket: "laboratory-app-ac1ba.firebasestorage.app",
    messagingSenderId: "561034546088",
    appId: "1:561034546088:web:65205e7eac965556046b9d"
};

if(!firebase.apps.length){
    let app = firebase.initializeApp(firebaseConfig);
    initializeAuth(app,{
        persistence: getReactNativePersistence(AsyncStorage)
    })
} 

export const auth = firebase.auth();
export const fireStore = firebase.firestore();
