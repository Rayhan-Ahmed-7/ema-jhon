// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaEsBIC3tMMoAfYFU4k6iMMhzJdXfTKoE",
  authDomain: "ema-jhon-9533b.firebaseapp.com",
  projectId: "ema-jhon-9533b",
  storageBucket: "ema-jhon-9533b.appspot.com",
  messagingSenderId: "325677544984",
  appId: "1:325677544984:web:fb9ad207d6c7a4b572f56d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;