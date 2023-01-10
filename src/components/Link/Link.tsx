import React from 'react';
import { ILink } from './ILink';
import styled from 'styled-components'
import { flex } from '../../constants/constants'

const StyledLink = styled.a<{bgColor?:string}>`
 ${flex()}
 border: 1px solid black;
 width: 70px;
 height: 30px;
 border-radius: 30px;
 text-decoration: none;
 color: black;
 &:hover {
    background: green;
 };
 background: ${props=>props.bgColor || 'blue'};
`

function Link (props: ILink) {
    return(

        <StyledLink  bgColor={props.bgColor} href={props.href}>
            {props.title}
        </StyledLink>
        
    )
}

export default Link;