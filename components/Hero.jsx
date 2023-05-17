"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

function Hero() {
  return (
    <Grid>
      <Left>
        <Button grey>Start Your Journey</Button>
        <HeroHead>
          Retail<br/>Solutions
        </HeroHead>
      </Left>
      <Right>
        <Image
          src="/hero.jpg"
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
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  grid-column: 2;
`;

const HeroHead = styled.h1`
  font-size: 15vw;
`;
