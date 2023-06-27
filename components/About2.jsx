"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Image from "next/image";

function About2() {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop =
        window.pageXOffset || document.documentElement.scrollTop;
      // Get the GridTop and GridBottom elements
      const aboutImage = document.getElementById("about-image2");
      // Apply translations based on scroll position
      if (aboutImage) {
        const initialScale = 2; // Set the initial scale (regular size)
        const scale = Math.max(initialScale - scrollTop / 5000, 1); // Adjust the scaling factor and set a minimum scale of 0
        aboutImage.style.transform = `scale(${scale})`;
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid>
      <Right>
        <Image
          id="about-image2"
          src="/about_2.png"
          alt=""
          fill="true"
          style={{ objectFit: "cover" }}
        />
      </Right>
      <Left>
        <h3>Product</h3>
        <HeadWrap>
          <H1>White</H1>
          <H1>Labeled</H1>
        </HeadWrap>
        <p>
          We understand the importance of maintaining a strong brand identity
          and delivering a seamless customer experience. Thats why we offer a
          white label loyalty system service, empowering businesses to create
          loyalty programs that reflect their unique brand image and values.
        </p>
        <Button black>Contact Sales</Button>
      </Left>
    </Grid>
  );
}

export default About2;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  column-gap: 30px;
  padding: 0px 30px 0px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 30px;
    width: 100vw;
  }
`;

const Left = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 130px;
  gap: 30px;
  background-color: #f4f4f4;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    padding: 40px;
    height: auto;
  }
`;

const Right = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
  @media screen and (max-width: 760px) {
    height: 500px;
  }
`;

const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const H1 = styled.h1`
  font-size: 5.4vw;
  @media screen and (max-width: 1000px) {
    font-size: 80px;
  }
  @media screen and (max-width: 760px) {
    font-size: 50px;
  }
`;
