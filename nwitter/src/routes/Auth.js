import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "theme";

import LoginBox from "components/Auth/LoginBox";

function Auth() {
  return (
    <Wrapper>
      <LoginBox />
    </Wrapper>
  );
}

export default Auth;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
