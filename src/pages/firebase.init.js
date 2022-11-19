// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVEgclFaxbYXd5AUqbNRlGFmu56gSvb0I",
  authDomain: "tourist-sport-clientside.firebaseapp.com",
  projectId: "tourist-sport-clientside",
  storageBucket: "tourist-sport-clientside.appspot.com",
  messagingSenderId: "143186868245",
  appId: "1:143186868245:web:8961be5b9e28d89288f61c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;