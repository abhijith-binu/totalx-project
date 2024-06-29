import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANHOfFzu1Zyw9yKELRugVlublTs3y8g5w",
  authDomain: "totalx-26498.firebaseapp.com",
  projectId: "totalx-26498",
  storageBucket: "totalx-26498.appspot.com",
  messagingSenderId: "461552505263",
  appId: "1:461552505263:web:efd31f59574671ca7d1f5a",
  measurementId: "G-0GGXTQ58JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
