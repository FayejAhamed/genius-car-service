// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxq-7KolaKZ5GRTDatJAjVI8DtfsZfo_o",
  authDomain: "genius-car-services-a3d16.firebaseapp.com",
  projectId: "genius-car-services-a3d16",
  storageBucket: "genius-car-services-a3d16.appspot.com",
  messagingSenderId: "862847336988",
  appId: "1:862847336988:web:f43b16c11b7bf68b3855d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;