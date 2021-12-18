import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { theme } from "theme";

export default function LoginBox() {
  return (
    <Wrapper>
      <h1>Welcome!</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid ${theme.yellow};
`;
