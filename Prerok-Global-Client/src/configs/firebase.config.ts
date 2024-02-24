// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VITE_APIKEY as string,
  authDomain: process.env.VITE_AUTHDOMAIN as string,
  projectId: process.env.VITE_PROJECTID as string,
  storageBucket: process.env.VITE_STORAGEBUCKET as string,
  messagingSenderId: process.env.VITE_MESSAGINGSENDERID as string,
  appId: process.env.VITE_APPID as string,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
export default auth;
