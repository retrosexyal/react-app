import React from "react";
import '../../Styles/style.css'
import Button from '../Buttons/Button'

export default class Card extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        const { title, subTitle, img} = this.props;

        return <div className="card">
            <h2>{ title }</h2>
            <p>{ subTitle }</p>
            <div>
                <img src={ img } alt={title + ' img'}></img>
            </div>
            <Button />
        </div>
    }
}