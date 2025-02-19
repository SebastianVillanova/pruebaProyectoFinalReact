// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messaginSenderId,
//   appId: process.env.REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOov1sImV9fv1lbmkhSQGAJl9SFnPYZzY",
  authDomain: "prueba12321-f131d.firebaseapp.com",
  projectId: "prueba12321-f131d",
  storageBucket: "prueba12321-f131d.firebasestorage.app",
  messagingSenderId: "543117769660",
  appId: "1:543117769660:web:30cdd955dec5c5232509b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);