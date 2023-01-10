import React from 'react';
import { Link } from 'react-router-dom'
import AddColourForm from './AddColourForm';

const AddColour = ({addNewColour}) => {
    return (
        <div>
            <AddColourForm addNewColour={addNewColour}/>
            <Link to='/colours'>Home</Link>
        </div>
    )
}

export default AddColour;