"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Features() {
  return (
    <Wrapper>
      <h1 style={{fontSize: "50px"}}>Features</h1>
      <Grid>
        <GridItem>
          <Image alt="feature" src="/loyalty.svg"  width="50" height="50" />
          <h3>Loyalty</h3>
          <p style={{ textAlign: "center" }}>
            Strengthen customer engagement to increase loyalty and purchase
            frequency
          </p>
        </GridItem>
        <GridItem>
          <Image alt="feature" src="/reward.svg"  width="50" height="50" />
          <h3>Rewards & Offers</h3>
          <p style={{ textAlign: "center" }}>
            Increase brand awareness by sending rewards, offers & coupons
            directly to your customers’ phones
          </p>
        </GridItem>
        <GridItem>
          <Image alt="feature" src="/marketing.svg"  width="50" height="50" />
          <h3>Marketing Automation</h3>
          <p style={{ textAlign: "center" }}>
            Our autoconnects™ feature allows your to automate your text
            marketing campaigns.
          </p>
        </GridItem>
        <GridItem>
          <Image alt="feature" src="/crm.svg" width="50" height="50" />
          <h3>CRM & Communication</h3>
          <p style={{ textAlign: "center" }}>
            With our customer relationship management software. increasing
            customer engagements and conversion rates is easier than ever{" "}
          </p>
        </GridItem>
        <GridItem>
          <Image alt="feature" src="/order.svg" width="50" height="50" />
          <h3>Online Ordering</h3>
          <p style={{ textAlign: "center" }}>
            Customers can place orders right from their springbig wallet through
            integrations with every major ecommerce platform in the cannabis
            space
          </p>
        </GridItem>
        <GridItem>
          <Image alt="feature" src="/referral.svg" width="50" height="50" />
          <h3>Referrals</h3>
          <p style={{ textAlign: "center" }}>
            Cannabis referral program. leverage social media with shareable,
            trackable referral links
          </p>
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

export default Features;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  align-items: center;
  padding: 200px 0px;
  @media screen and (max-width: 1000px) {
    row-gap: 60px;
    padding: 100px 0px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 50px;
  max-width: 1400px;
  margin: auto;
  padding: 0px 150px;
  height: auto;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
    width: 100vw;
    padding: 0px 90px;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
`;
