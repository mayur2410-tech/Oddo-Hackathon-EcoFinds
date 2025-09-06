// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Added Google provider

const firebaseConfig = {
  apiKey: "AIzaSyBhylFw8FjtaLMj6ImjfWTV8QZvdQiV7_0",
  authDomain: "ecofinds-c571c.firebaseapp.com",
  projectId: "ecofinds-c571c",
  storageBucket: "ecofinds-c571c.appspot.com",
  messagingSenderId: "860492609693",
  appId: "1:860492609693:web:fb2ceccee6e968679cbc74",
  measurementId: "G-05P3X8EPYH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase Authentication
export const auth = getAuth(app);

// ✅ Export Google Auth provider
export const googleProvider = new GoogleAuthProvider();

export default app;