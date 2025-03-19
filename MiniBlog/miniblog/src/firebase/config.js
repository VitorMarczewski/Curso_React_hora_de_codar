
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBYo0n7HrdyjHoggxVT4t3WGvzQf7Qc860",
  authDomain: "miniblog-a5f43.firebaseapp.com",
  projectId: "miniblog-a5f43",
  storageBucket: "miniblog-a5f43.firebasestorage.app",
  messagingSenderId: "764669186922",
  appId: "1:764669186922:web:d9956dff938b1eafb2cb13"
};


const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export {db};