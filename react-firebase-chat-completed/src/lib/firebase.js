import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8kVAIZc8tV18uXueDoafX4Ms5BF25zZQ",
  authDomain: "reactchat-1392f.firebaseapp.com",
  projectId: "reactchat-1392f",
  storageBucket: "reactchat-1392f.appspot.com",
  messagingSenderId: "341673978154",
  appId: "1:341673978154:web:da5647170d016fca331653",
  measurementId: "G-NB42EQ28JN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

