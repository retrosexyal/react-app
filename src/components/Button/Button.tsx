import React from 'react';
import { IButton } from './IButton';

function Button(props: IButton){
    return(<button>{props.title}</button>)
}

export default Button;