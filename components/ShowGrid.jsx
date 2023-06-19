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
      <GridTop id='grid-top'>
        <GridItem><Image src='/1.svg' alt='' fill='true' style={{objectFit: 'cover', width: '100%', height: '100%'}}/></GridItem>
        <GridItem hideMobile><Image src='/2.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem>
        <GridItem hideTablet><Image src='/3.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem>
        <GridItem hideMobile><Image src='/4.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem>
      </GridTop>
      <GridBottom id='grid-bottom'>
        <GridItem><Image src='/5.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem>
        <GridItem hideMobile><Image src='/6.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem>
        <GridItem hideTablet><Image src='/7.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem> 
        <GridItem hideMobile><Image src='/8.svg' alt='' fill='true' style={{objectFit: 'cover'}}/></GridItem> 
      </GridBottom>
    </Wrapper>
  );
}

export default ShowGrid;

const Wrapper = styled.div`
    height: auto;
    width: 100vw;
    overflow: hidden;
    margin: 30px 0px 0px 0px;
`;

const GridTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 32vh;
  column-gap: 30px;
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
  height: 32vh;
  column-gap: 30px;
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