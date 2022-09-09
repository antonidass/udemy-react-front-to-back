import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPYpD1ePBHlEuTmpmEEcodvYEPgKW9pZQ",
  authDomain: "housemarketplaceapp-ec4d8.firebaseapp.com",
  projectId: "housemarketplaceapp-ec4d8",
  storageBucket: "housemarketplaceapp-ec4d8.appspot.com",
  messagingSenderId: "687467899970",
  appId: "1:687467899970:web:5e16a836b1b944d74991db",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
