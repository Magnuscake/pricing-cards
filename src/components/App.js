import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Switch from './Switch';
import PriceCardGroup from './PriceCardGroup';

import '../styles/global.css';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const [changePrice, setChangePrice] = useState(false);

  const isChecked = (checkBoxState) => {
    setChangePrice(checkBoxState);
  };

  return (
    <Wrapper>
      <Header>Our Pricing</Header>
      <Switch isChecked={isChecked} />
      <PriceCardGroup changePrice={changePrice} />
    </Wrapper>
  );
};

export default App;
