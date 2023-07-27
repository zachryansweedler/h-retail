import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Image from "next/image";

function Footer() {
  return (
    <Wrapper>
      <FooterGrid>
        <FooterColumn lgGap>
          <Image alt="h-logo" width={40} height={40} src="/hlogo.svg"/>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <p>Copyright 2023. H. Loyalty Solutions, LLC</p>
          </div>
        </FooterColumn>
      </FooterGrid>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  padding: 60px 30px;
  background-color: #FFFFFF;
`;

const FooterGrid = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 60px;
  }
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: ${(props) => (props.lgGap ? "30px" : "20px")};
  align-items: flex-start;
`;
