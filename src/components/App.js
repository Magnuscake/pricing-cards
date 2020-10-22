import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Switch from "./Switch";
import PriceCardGroup from "./PriceCardGroup";

import "../styles/global.css";

const App = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <Wrapper>
      <Header>Our Pricing</Header>
      <Switch />
      <PriceCardGroup />
    </Wrapper>
  );
};

export default App;
