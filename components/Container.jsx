"use client";
import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;

const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: auto;
  gap: 30px;
`;
