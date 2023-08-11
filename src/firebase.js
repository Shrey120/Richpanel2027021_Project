// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDGnAwz0vyek1VxTKytj90bFQkU84KDc44",
  authDomain: "biliing-project.firebaseapp.com",
  projectId: "biliing-project",
  storageBucket: "biliing-project.appspot.com",
  messagingSenderId: "786730372586",
  appId: "1:786730372586:web:4f8b8cac6adabcaebcb693",
  measurementId: "G-LJQERKJL14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
