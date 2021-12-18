import React, { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { theme } from "theme";

import LoginBox from "components/Auth/LoginBox";

function Auth() {
  return (
    <Wrapper>
      <LoginBox />
    </Wrapper>
  );
=======

function Auth() {
  return <AuthWrapper>Auth</AuthWrapper>;
>>>>>>> b535168443932d6b3c0849278dba32654e9ef234
}

export default Auth;

<<<<<<< HEAD
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
=======
const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
>>>>>>> b535168443932d6b3c0849278dba32654e9ef234
`;
