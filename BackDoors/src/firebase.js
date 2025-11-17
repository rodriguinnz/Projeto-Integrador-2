// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔥 Sua configuração da Firebase (exatamente como você enviou)
const firebaseConfig = {
  apiKey: "AIzaSyAYIEdRUlTXZIoK82cOaMrbdWt9gnpnv8s",
  authDomain: "trapdoor-dd8ef.firebaseapp.com",
  projectId: "trapdoor-dd8ef",
  storageBucket: "trapdoor-dd8ef.firebasestorage.app",
  messagingSenderId: "437158539162",
  appId: "1:437158539162:web:7ae30a30944e9abb211423",
  measurementId: "G-D24ENWKNZG",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Inicializa o Auth (ESSENCIAL)
export const auth = getAuth(app);

// export default opcional
export default app;
