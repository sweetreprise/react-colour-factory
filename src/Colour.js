import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Colour.css'

const Colour = ({colours}) => {
    const {colour} = useParams();
    let currentColour;

    if (colour) {
        currentColour = colours.find(
            colourName => colourName.name.toLowerCase() === colour.toLowerCase()
        );
    }
    
    const style = {
        backgroundColor: currentColour.hex
    }

    return (
        <div className='cover' style={style}>
            <h1>HEY THIS IS {currentColour.name}</h1>
            <h3>isn't is a lovely colour?!?!?!?!</h3>
            <Link to='/colours'>Home</Link>
        </div>
    )
}

export default Colour;