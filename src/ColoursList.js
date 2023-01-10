import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ColoursList = ({colours}) => {
    
    // const allColours = colours.map(colour => (
    //     <li key={colour.hex}>
    //         <Colour
    //             name={colour.name}
    //             hex={colour.hex}
    //         />
    //     </li>
    // ));

    return (
        <div className='container'>
            <h1>
                Some colours for you!
            </h1>
            <ul>
            {colours.map(colour => (
                <li key={colour.hex}>
                    <Link to={`/colours/${colour.name.toLowerCase()}`}>{colour.name}</Link>
                </li>
            ))}
            </ul>
            <p>
                <Link to='/colours/new'>Add colour</Link>
            </p>
        </div>
    )
}

export default ColoursList;