// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyArVHv1GBOxHHOX1GMqdOWDmmz9UIsXnoo",
//   authDomain: "nwitter-45098.firebaseapp.com",
//   projectId: "nwitter-45098",
//   storageBucket: "nwitter-45098.appspot.com",
//   messagingSenderId: "870802524028",
//   appId: "1:870802524028:web:afb869d743c9648a3606f9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
