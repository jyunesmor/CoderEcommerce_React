// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAR4kQUbjBFmE9SOz75dhuciTy7t3SwAAg",
	authDomain: "coderecommerce-1eec5.firebaseapp.com",
	projectId: "coderecommerce-1eec5",
	storageBucket: "coderecommerce-1eec5.appspot.com",
	messagingSenderId: "435184239194",
	appId: "1:435184239194:web:7f02084f1096f10e11ce63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
