import React from 'react';
import { ILink } from './ILink';
import styled from 'styled-components'
import { flex } from '../../constants/constants'

const StyledLink = styled.a`
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
`

function Link (props: ILink) {
    return(

        <StyledLink href={props.href}>
            {props.title}
        </StyledLink>
        
    )
}

export default Link;