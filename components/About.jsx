"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Image from "next/image";

function About() {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop =
        window.pageXOffset || document.documentElement.scrollTop;
      // Get the GridTop and GridBottom elements
      const aboutImage = document.getElementById("about-image");
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
      <Left>
        <p>About</p>
        <HeadWrap>
          <H1>Beyond</H1>
          <H1>Loyalty.</H1>
        </HeadWrap>
        <p>
          H Loyalty Solutions is a cutting-edge Software-as-a-Service (SaaS) business that specializes in
          providing comprehensive loyalty system solutions to businesses of all
          sizes and industries. With a focus on enhancing customer engagement,
          retention, and brand loyalty, LoyaltyXpert offers a suite of powerful
          tools and features to help businesses create, manage, and optimize
          their loyalty programs.
        </p>
        <Button black>Start Your Journey</Button>
      </Left>
      <Right>
        <Image
          id="about-image"
          src="/about_image.jpeg"
          alt=""
          fill="true"
          style={{ objectFit: "cover" }}
        />
      </Right>
    </Grid>
  );
}

export default About;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  column-gap: 30px;
  padding: 30px 30px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
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
