import React from 'react';
import  styled  from 'styled-components';
import { StyledFlexCont } from '../../styles/SyledComponents/StyledFlexCont';
import { IResults } from './ICard';

const StyledCard = styled(StyledFlexCont)`
flex-direction: column;
`

function Card(props: IResults){
    const { id , name, status, image } = props;
    return(
    <StyledCard>
        <h2>{name}</h2>
        <p>{status}</p>
        <div>
            <img src={image} alt={`${name} picture`} />
        </div>
    </StyledCard>
    );
}

export default Card;