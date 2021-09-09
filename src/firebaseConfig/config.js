import { initializeApp } from "firebase/app";
import 'firebase/auth';


//export default initializeApp({
//    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
//    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT,
//})


const firebaseConfig = {
    apiKey: "AIzaSyAPNLKvO8XTuMhx7-gvxpMeyps7brj3rZk",
    authDomain: "admin-template-cod3r-4205d.firebaseapp.com",
    projectId: "admin-template-cod3r-4205d",
    storageBucket: "admin-template-cod3r-4205d.appspot.com",
    messagingSenderId: "674176899613",
    appId: "1:674176899613:web:a440112a88cae5c81c04f4"
};

export default initializeApp(firebaseConfig);