import { initializeApp } from "./firebase/app";
import { getFirestore } from './firebase/firestore';
import { getAuth} from './firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASHp3VajgAw8jCedtEuCcyRrD-s7VMPIA",
  authDomain: "hiitmo-6a7cf.firebaseapp.com",
  projectId: "hiitmo-6a7cf",
  storageBucket: "hiitmo-6a7cf.appspot.com",
  messagingSenderId: "883046548907",
  appId: "1:883046548907:web:adccf69871c85a05897eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Eportar o Firestore e o Auth
export const db = getFirestore(app);
export const auth = getAuth(app);