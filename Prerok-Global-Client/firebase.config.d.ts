declare module "../configs/firebase.config.ts" {
    import { FirebaseApp } from "firebase/app";
    interface FirebaseConfig {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
    }
    const app: FirebaseApp;
    export { firebaseConfig, app };
}
