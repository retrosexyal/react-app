import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledFlexCont } from "../../styles/SyledComponents/StyledFlexCont";
import Button from "../Button/Button";
import { IResults } from "./ICard";

const StyledCard = styled(StyledFlexCont)`
  flex-direction: column;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
`;


function Card(props: IResults) {
  const { id, name, status, image } = props;
  const [cardInfo, setCardInfo] = useState<IResults>({ name: "", status: "", id : 0, image: "" });
  const [stat, setStat] = useState(false);
  const addToFavorites = () => {
    setCardInfo({ name: name, status: status, id: id, image: image, });
    setStat(!stat);
  };
  useEffect(() => {
    if (localStorage.favorites && cardInfo.name !== "") {
      const favoritesArr = JSON.parse(localStorage.favorites);
      let isInclude = false;
      favoritesArr.forEach((e: { id: number; })=>{
        if(e.id === cardInfo.id){
          isInclude = true;
        }
      })
      if (!isInclude){
        localStorage.setItem(
          `favorites`,
          JSON.stringify([...JSON.parse(localStorage.favorites), cardInfo])
        );
      }
    } else if (cardInfo.name !== "") {
      localStorage.setItem(`favorites`, JSON.stringify([cardInfo]));
    }
  }, [cardInfo, stat]);
  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>{status}</p>
      <div>
        <img src={image} alt={`${name} picture`} />
      </div>
      <Button onClick={addToFavorites} title="add to favorites" />
    </StyledCard>
  );
}

export default Card;
