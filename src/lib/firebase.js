// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyDaDUPZiYwatYZhFpN7C9i77ntvxTRlJQY",
//     authDomain: "san-pedro-de-yauyo-50eea.firebaseapp.com",
//     projectId: "san-pedro-de-yauyo-50eea",
//     storageBucket: "san-pedro-de-yauyo-50eea.appspot.com",
//     messagingSenderId: "506398475293",
//     appId: "1:506398475293:web:fd6a3e2f431e07d6ad32f4",
//     measurementId: "G-6VK11HLSVF"
// };

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

// Inicializa Firebase Authentication y obtén una referencia al servicio
// export const auth = getAuth(app);
export { auth, db, storage };