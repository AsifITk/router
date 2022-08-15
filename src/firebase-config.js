// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTMBvSPpCmU1XDIgdU8uUnf5FlEbKnR9A",
    authDomain: "mail-app-df518.firebaseapp.com",
    projectId: "mail-app-df518",
    storageBucket: "mail-app-df518.appspot.com",
    messagingSenderId: "543495143546",
    appId: "1:543495143546:web:45ab0be90df2e84d163bc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }