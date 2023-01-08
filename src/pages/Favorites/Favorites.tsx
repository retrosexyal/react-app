import React from "react";
import { StyledCardCont } from "../../containers/CardsCont/CardsCont";
import Card from "../../components/Card/Card";

function Favorites() {
  return (
  <StyledCardCont>
    {localStorage.favorites && JSON.parse(localStorage.favorites).map((e: { id: number; name: string; status: string; image: string; }) => {
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
  </StyledCardCont>)
}

export default Favorites;
