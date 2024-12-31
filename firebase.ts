import {
    initializeAuth,
    // @ts-ignore
    getReactNativePersistence,
} from "firebase/auth";
import firebase from "firebase/compat";
import AsyncStorage from "@react-native-async-storage/async-storage"
import apData from './guides/ap.json';
import tjpData from './guides/tjp.json';
import cilvData from './guides/cilv.json';
import osData from './guides/os.json';
import turkjmedsci from './guides/turkjmedsci.json';

const firebaseConfig = {
    apiKey: "AIzaSyDsoWzojdFkm5sailOWxBH5q2-1HZYIUYI",
    authDomain: "laboratory-app-ac1ba.firebaseapp.com",
    projectId: "laboratory-app-ac1ba",
    storageBucket: "laboratory-app-ac1ba.firebasestorage.app",
    messagingSenderId: "561034546088",
    appId: "1:561034546088:web:65205e7eac965556046b9d"
};

if (!firebase.apps.length) {
    let app = firebase.initializeApp(firebaseConfig);
    initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    })
}

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const Collections = {
    Guides: 'guides',
    Analysis: 'analysis'
}

export const uploadDataIfCollectionNotExists = async () => {
    try {
        const collectionRef = fireStore.collection(Collections.Guides);

        const querySnapshot = await collectionRef.get();

        if (querySnapshot.empty) {
            await collectionRef.add(apData)
            await collectionRef.add(tjpData)
            await collectionRef.add(osData)
            await collectionRef.add(turkjmedsci)
            await collectionRef.add(cilvData)
        }
    } catch (error) {
        console.error('Koleksiyon oluşturma sırasında hata:', error);
    }
};

export const getDataWithCollection = <T>(collection: string, callback: (data: T[]) => void) => {
    fireStore.collection(collection)
        .onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as T[];
            callback(data);
        }, error => {
            console.error("Error fetching data:", error);
        });
};