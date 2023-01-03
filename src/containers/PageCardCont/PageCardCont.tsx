import React, { useEffect, useState } from "react";
import CardPage from "../../components/CardPage/CardPage";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";
import styled from "styled-components";

const StyledPageCardCont = styled(StyledFlexCont)`
gap:20px;
margin: 20px 0;
`

function PageCardCont({pageNumber, setNumberPages}:{pageNumber:number, setNumberPages:any}) {

    const arrOfPages = [];
        for (let i =1; i<= pageNumber; i++) {
            arrOfPages.push(i);
        }
    
  return (
    <StyledPageCardCont>
        <>{arrOfPages.map(e=><CardPage setNumberPages={setNumberPages} key={e} title={e}/>)}</>
    </StyledPageCardCont>
  );
}

export default PageCardCont;
