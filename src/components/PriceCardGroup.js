import React from "react";
import styled from "styled-components";

import PriceCard from "./PriceCard";

const planDetails = [
  {
    planType: "Basic",
    price: {
      monthly: "19.99",
      anually: "229.99",
    },
    storage: "550 GB",
    usersAllowed: 2,
    sendLimit: 3,
  },
  {
    planType: "Professional",
    price: {
      monthly: "24.99",
      anually: "279.99",
    },
    storage: "1 TB",
    usersAllowed: 5,
    sendLimit: 10,
  },
  {
    planType: "Master",
    price: {
      monthly: "39.99",
      anually: "449.99",
    },
    storage: "2 TB",
    usersAllowed: 10,
    sendLimit: 20,
  },
];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceCardGroup = ({ changePrice }) => {
  return (
    <Wrapper>
      {planDetails.map((details, index) => {
        return (
          <PriceCard
            planType={details.planType}
            price={changePrice ? details.price.anually : details.price.monthly}
            storage={details.storage}
            usersAllowed={details.usersAllowed}
            sendLimit={details.sendLimit}
            key={index}
            highlight={index === 1 ? "highlight" : ""}
            buttonText="Learn More"
          />
        );
      })}
    </Wrapper>
  );
};

export default PriceCardGroup;
