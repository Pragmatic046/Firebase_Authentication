// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0cyIXDpx-k_j5Xd2KD9kYKP8RNJOIBDA",
  authDomain: "fir-authentication-2c1df.firebaseapp.com",
  projectId: "fir-authentication-2c1df",
  storageBucket: "fir-authentication-2c1df.appspot.com",
  messagingSenderId: "886092062891",
  appId: "1:886092062891:web:460e897e434af9f91f97ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)