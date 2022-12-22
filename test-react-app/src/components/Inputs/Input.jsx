import React from "react";

export default class Input extends React.Component {
    render(){
        return <>
            <input type="text" placeholder="search" onChange={(e)=>console.log(e.target.value)}/>
        </>
    }
}