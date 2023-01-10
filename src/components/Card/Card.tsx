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
  const [cardInfo, setCardInfo] = useState<IResults>({
    name: "",
    status: "",
    id: 0,
    image: "",
  });
  const [isAdded, setIsAdded] = useState(false);
  

  const addToFavorites = () => {
    setCardInfo({ name: name, status: status, id: id, image: image });
    const favArr = localStorage.favorites ?  JSON.parse(localStorage.favorites) : "";
    if (localStorage.favorites && !isAdded) {
      for (let i = 0; JSON.parse(localStorage.favorites).length > i; i++) {
        if (JSON.parse(localStorage.favorites)[i].id === id) {
         return setIsAdded(true);
        }
      }
    }
    if (isAdded) {
      for (let i = 0; favArr.length > i; i++) {
        if (favArr[i].id === id) {
          favArr[i] = '';
          localStorage.setItem('favorites', JSON.stringify(favArr.filter((e:IResults | string)=>e!=="")));
         setIsAdded(false); 
        }
      }
    }
  };

  useEffect(() => {
    if (localStorage.favorites && cardInfo.name !== "" && !isAdded) {
      const favoritesArr = JSON.parse(localStorage.favorites);
      let isInclude = false;
      favoritesArr.forEach((e: { id: number }) => {
        if (e.id === cardInfo.id) {
          isInclude = true;  
        }
      });
      if (!isInclude) {     
        localStorage.setItem(
          `favorites`,
          JSON.stringify([...JSON.parse(localStorage.favorites), cardInfo])
        );
      }
    } else if (cardInfo.name !== "" && !isAdded) {    
      localStorage.setItem(`favorites`, JSON.stringify([cardInfo]));
    }
  }, [cardInfo]);

  useEffect(()=>{
    if (localStorage.favorites && !isAdded) {
      for (let i = 0; JSON.parse(localStorage.favorites).length > i; i++) {
        if (JSON.parse(localStorage.favorites)[i].id === id) {
         setIsAdded(true);
        }
      }
    }
  },[])

  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>{status}</p>
      <div>
        <img src={image} alt={`${name} picture`} />
      </div>
      <Button
        onClick={addToFavorites}
        title={
            isAdded
            ? "delete from favorites"
            : "add to favorites"
        }
      />
      <div>{isAdded.toString()}</div>
    </StyledCard>
  );
}

export default Card;

/* localStorage.favorites &&
          JSON.parse(localStorage.favorites).find((e: IResults) => e.id === id) */