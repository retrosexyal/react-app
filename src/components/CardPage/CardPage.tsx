import React from "react";
import styled from "styled-components";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";

const StyledCardPage = styled(StyledFlexCont)`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #cbf7df;
`;

function CardPage({title, setNumberPages}:{title:number, setNumberPages: any}) {

  const handleClick = () => {
    return setNumberPages(title)
  };

  return <StyledCardPage onClick={handleClick}>{title}</StyledCardPage>;
}

export default CardPage;
