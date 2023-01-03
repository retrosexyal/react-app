import React, { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import { IResults } from "../../components/Card/ICard";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";

const StyledCardCont = styled(StyledFlexCont)`
  flex-wrap: wrap;
  gap: 20px;
`;

function CardsCont({page, numberPage}:{page:any, numberPage: number}) {
  const [data, setData] = useState<IResults[]>();
  const [isLoad, setLoadStatus] = useState(false);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadStatus(true);
        setData(data.results);
        page(data.info.pages);
      });
  }, [numberPage]);

  return (
    <StyledCardCont>
      {isLoad &&
        data?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              status={e.status}
              image={e.image}
            />
          );
        })}
    </StyledCardCont>
  );
}

export default CardsCont;
