import React, { useEffect, useState } from "react";
import CardPage from "../../components/CardPage/CardPage";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";
import styled from "styled-components";

const StyledPageCardCont = styled(StyledFlexCont)`
  gap: 20px;
  margin: 20px 0;
`;

function PageCardCont({
  pageNumber,
  setNumberPages,
  numberPage,
}: {
  pageNumber: number;
  setNumberPages: any;
  numberPage: number;
}) {
  const arrOfPages = [];
  for (let i = 1; i <= pageNumber; i++) {
    arrOfPages.push(i);
  }

  return (
    <StyledPageCardCont>
      <>
        {arrOfPages.map((e) => {
          if (
            e === 1 && e !== numberPage ||
            e === numberPage + 1 ||
            e === numberPage - 1 ||
            e === arrOfPages.length && e !== numberPage 
          )
            return (
              <CardPage setNumberPages={setNumberPages} key={e} title={e} />
            );

            if ( e === numberPage ) {
              return (
                <>
                <>...</>
                <CardPage setNumberPages={setNumberPages} key={e} title={e} />
                <>...</>
                </>
              )
            }
        })}
      </>
    </StyledPageCardCont>
  );
}

export default PageCardCont;
