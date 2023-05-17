import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

function Footer() {
  return (
    <Wrapper>
      <FooterGrid>
        <FooterColumn lgGap>
          <h1>H.</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <h4>Subscribe to Customer Stories</h4>
            <p>Get product updates, company news, and more.</p>
          </div>
          <Button black>Subscribe</Button>
        </FooterColumn>
        <FooterColumn>
          <p>Product</p>
          <p>Features</p>
          <p>Security</p>
          <p>Product</p>
          <p>Team</p>
          <p>Enterprise</p>
          <p>Customer Stories</p>
          <p>The ReadME Project</p>
          <p>Pricing</p>
          <p>Resources</p>
        </FooterColumn>
        <FooterColumn>
          <p>Company</p>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Inclusion</p>
          <p>Social Impact</p>
          <p>Shop</p>
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
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 60px;
  }
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.lgGap ? "30px" : "20px")};
  align-items: flex-start;
`;
