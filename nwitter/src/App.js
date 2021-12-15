import { useState } from "react";
import AppRouter from "components/Router";
import Authentication from "Authentication";
import firebase from "firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log(getAuth().currentUser);

  return (
    <>
      <Authentication />
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
