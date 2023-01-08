import React, {FC} from "react";
import styled from "styled-components";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";

let bg = "#cbf7df";
const StyledCardPage = styled(StyledFlexCont)<{bgClr:string}>`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props=>props.bgClr};
  &:hover {
    cursor: pointer;
    background-color: #81b599;
  }
`;

function CardPage ({
  title,
  setNumberPages,
  bgColor,
}: {
  title: number;
  setNumberPages: any;
  bgColor?: string;
}) {
  const handleClick = () => {
    setNumberPages(title);
  };

  return <StyledCardPage bgClr={bgColor || bg} onClick={handleClick}>{title}</StyledCardPage>;
}

export default CardPage;
