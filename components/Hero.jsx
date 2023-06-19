"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

function Hero() {
  return (
    <Grid>
      <Left>
        <Button grey>Contact Sales</Button>
        <HeroHead>
          Loyalty<br/>Solutions
        </HeroHead>
      </Left>
      <Right>
        <Image
          src="/hero_image.jpg"
          alt=""
          fill="true"
          style={{ objectFit: "cover" }}
        />
      </Right>
    </Grid>
  );
}

export default Hero;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  overflow: hidden;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  position: absolute;
  z-index: 100;
  padding: 30px;
  gap: 15px;
  @media screen and (max-width: 760px) {
    position: relative;
    height: 50vh;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  grid-column: 2;
  @media screen and (max-width: 760px) {
    position: relative;
    height: 50vh;
    grid-column: 1;
  }
`;

const HeroHead = styled.h1`
  font-size: 15vw;
`;
