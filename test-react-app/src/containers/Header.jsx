import React from "react";
import Button from "../components/Buttons/Button";
import Input from "../components/Inputs/Input";
import Logo from "../components/Logo/Logo";
import './header.css'

export default class Header extends React.Component {
    
    render() {
        return <header className="header">
            <Logo/>
            <Button text={'even'} test={this.props.test}/>
            <Input/> 
        </header>
    }
}