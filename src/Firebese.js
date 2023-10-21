
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";







const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_URL_FIRBES_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_URL_FIRBES_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_URL_FIRBES_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_URL_FIRBES_STORAAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_URL_FIRBES_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_URL_FIRBES_APP_ID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth()

