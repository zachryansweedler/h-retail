"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";

function ShowGrid() {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
      // Get the GridTop and GridBottom elements
      const gridTop = document.getElementById("grid-top");
      const gridBottom = document.getElementById("grid-bottom");
      // Apply translations based on scroll position
      if (gridTop) {
        gridTop.style.transform = `translateX(-${scrollTop / 10}px)`;
      }
      if (gridBottom) {
        gridBottom.style.transform = `translateX(${scrollTop / 10}px)`;
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
    <Wrapper>
      <h1 style={{marginBottom: "60px"}}>Our Clients</h1>
      <GridTop id='grid-top'>
        <GridItem><Image src='/logo1.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
        <GridItem hideMobile><Image src='/logo2.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
        <GridItem hideTablet><Image src='/logo3.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
        <GridItem hideMobile><Image src='/logo4.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
      </GridTop>
      <GridBottom id='grid-bottom'>
        <GridItem><Image src='/logo5.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
        <GridItem hideMobile><Image src='/logo6.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem>
        <GridItem hideTablet><Image src='/logo7.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem> 
        <GridItem hideMobile><Image src='/logo8.svg' alt='' fill='true' style={{objectFit: 'contain'}}/></GridItem> 
      </GridBottom>
    </Wrapper>
  );
}

export default ShowGrid;

const Wrapper = styled.div`
    height: 500px;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px 0px;
    @media screen and (max-width: 1000px) {
     display: none;
  }
`;

const GridTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 250px;
  grid-gap: 160px;
  margin-bottom: 30px;
  @media screen and (max-width: 1000px) {
     display: none;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const GridBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 250px;
  grid-gap: 160px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: ${(props) => (props.hideTablet ? 'none' : 'block')};
  }
  @media screen and (max-width: 760px) {
    display: ${(props) => (props.hideMobile ? 'none' : 'block')};
  }
`;