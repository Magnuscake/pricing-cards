import React from "react";
import styled from "styled-components";

import PriceCard from "./PriceCard";

const planDetails = [
  {
    planType: "Basic",
    price: "19.99",
    storage: "550 GB",
    usersAllowed: 2,
    sendLimit: 3,
  },
  {
    planType: "Professional",
    price: "24.99",
    storage: "1 TB",
    usersAllowed: 5,
    sendLimit: 3,
  },
  {
    planType: "Master",
    price: "39.99",
    storage: "2 TB",
    usersAllowed: 10,
    sendLimit: 20,
  },
];

const PriceCardGroup = () => {
  const Wrapper = styled.div`
    display: flex;
  `;
  return (
    <Wrapper>
      <PriceCard buttonText="Learn More" />
      <PriceCard buttonText="Learn More" highlight />
      <PriceCard buttonText="Learn More" />
    </Wrapper>
  );
};

export default PriceCardGroup;
