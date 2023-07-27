"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Link from "next/link";

function Hero() {
  return (
    <Grid>
      <Left>
        <HeroHead>
          Loyalty
          <br />
          Solutions
        </HeroHead>
        <p>
          Cutting-edge Software-as-a-Service (SaaS) business that specializes in
          providing comprehensive loyalty system solutions to businesses of all
          sizes and industries.{" "}
        </p>
        <Link href="/contact">
          <Button grey>Contact Sales</Button>
        </Link>
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
  justify-content: center;
  align-items: start;
  position: relative;
  z-index: 100;
  padding: 160px 30px;
  gap: 30px;
  @media screen and (max-width: 760px) {
    position: relative;
    height: auto;
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
  font-size: 100px;
  @media screen and (max-width: 760px) {
    font-size: 60px;
  }
`;
