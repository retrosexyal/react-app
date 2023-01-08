import React, {FC} from 'react';
import { IButton } from './IButton';
import styled from 'styled-components';

const StyledButton = styled.button`

`
const Button:FC<IButton> = (props) =>{
    return(<StyledButton onClick={props.onClick} >{props.title}</StyledButton>)
}


/* function Button(props: IButton){
    return(<StyledButton>{props.title}</StyledButton>)
} */

export default Button;