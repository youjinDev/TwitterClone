import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "routes/Home";
import Profile from "routes/Profile";
import EditProfile from "routes/EditProfile";
import Auth from "routes/Auth";

import { getAuth } from "firebase/auth";

export default function AppRouter() {
  // const [isLoggedIn, setIsLoggedIn] = useState(getAuth().currentUser); //null이 들어옴
  const [isLoggedIn, setIsLoggedIn] = useState(true); //null이 들어옴
  const { currentUser } = getAuth();
  console.log(currentUser);
  // useEffect(() => {
  //   const { currentUser } = getAuth();
  //   setIsLoggedIn(currentUser);
  // }, []);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profile/:id" element={<EditProfile />} />
          </>
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}
