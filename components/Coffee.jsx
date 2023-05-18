"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Image from "next/image";

function Coffee() {

  return (
    <Wrapper>
      <TextWrapper>
        <p>Ready?</p>
        <BigTextWrapper>
          <BigText>Let&apos;s Get</BigText>
          <BigText style={{ color: "#492B00" }}>Coffee</BigText>
        </BigTextWrapper>
        <Button brown>Start Your Journey</Button>
      </TextWrapper>
      <ImageContainer>
        <Image
          id="coffee-cup"
          src="/coffee-cup.png"
          alt=""
          width='700'
          height='700'
          style={{
            position: "absolute",
            top: '0',
            left: '0',
            transform: 'translateX(-200px) translateY(-200px)'
          }}
        />
      </ImageContainer>
    </Wrapper>
  );
}

export default Coffee;

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  justify-content: center;
  gap: 30px;
  background-color: #faf6ef;
  position: relative;
  overflow: hidden;
  width: 100vw;
  @media screen and (max-width: 700px) {
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 100px 0px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 60;
  gap: 30px;
`;

const BigTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 60;
`;

const BigText = styled.h1`
  font-size: 6.5vw;
  align-self: center;
  @media screen and (max-width: 1000px) {
    font-size: 60px;
  }
`;

const ImageContainer = styled.div`
  @media screen and (max-width: 1000px) {
    & > img {
      width: 600px !important;
      height: 600px !important;

    }
  }
  @media screen and (max-width: 460px) {
    & > img {
      width: 450px !important;
      height: 450px !important;
      transform: translateX(-250px) translateY(-200px) !important;
    }
  }
`;