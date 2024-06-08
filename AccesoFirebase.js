// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANISdD8Z22s3qi65hU-m0AKU9EZapf3T4",
  authDomain: "my-project-3079b.firebaseapp.com",
  projectId: "my-project-3079b",
  storageBucket: "my-project-3079b.appspot.com",
  messagingSenderId: "413801680421",
  appId: "1:413801680421:web:56d6b00aebd32c72b879cc"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);

export { db };
export default appFireBase;
