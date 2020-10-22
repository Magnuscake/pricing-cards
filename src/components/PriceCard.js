import React from "react";
import styled, { css } from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: ${(props) => (props.highlight ? "400px" : "360px")};
  width: 270px;
  padding: 25px 20px;
  background: ${(props) => (props.highlight ? "#7986cb" : "#fafafa")};
  color: ${(props) => (props.highlight ? "#fff" : "#000")};
  border-radius: 3%;
  box-shadow: 0 0 5px #888;

  ${(props) =>
    props.highlight &&
    css`
      z-index: 1;
    `}
`;

const Price = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin: 15px 0 15px 0;
`;

const CardInfo = styled.p`
  display: block;
  margin: 10px 0;
  font-size: 13px;
`;

const Span = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  height: 40px;
  vertical-align: middle;
`;

const Hr = styled.div`
  height: 1px;
  width: 95%;
  background-color: ${(props) =>
    props.highlight ? "rgba(232, 232, 232, 0.2)" : "rgba(51, 51, 51, 0.2)"};
`;

const Button = styled.button`
  display: block;
  width: 95%;
  height: 35px;
  margin-top: 20px;
  background: ${(props) => (props.highlight ? "#fafafa" : "#7986cb")};
  color: ${(props) => (props.highlight ? "#000" : "#fff")};
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
`;

const PriceCard = ({ buttonText, highlight }) => {
  return (
    <Content highlight={highlight}>
      Professional
      <Price>
        <Span>$</Span> 24.99
      </Price>
      <Hr highlight={highlight} />
      <CardInfo>1 TB Storage</CardInfo>
      <Hr highlight={highlight} />
      <CardInfo>5 Users Allowed</CardInfo>
      <Hr highlight={highlight} />
      <CardInfo>Send up to 10 GB</CardInfo>
      <Button highlight={highlight}>{buttonText}</Button>
    </Content>
  );
};

export default PriceCard;
