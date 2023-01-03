import React from "react";
import styled from "styled-components";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";

let bg = "#cbf7df";
const StyledCardPage = styled(StyledFlexCont)`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${bg};
`;

function CardPage({
  title,
  setNumberPages,
}: {
  title: number;
  setNumberPages: any;
}) {
  const handleClick = () => {
    setNumberPages(title);
  };

  return <StyledCardPage onClick={handleClick}>{title}</StyledCardPage>;
}

export default CardPage;
