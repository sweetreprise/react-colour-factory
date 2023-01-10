import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ColoursList from './ColoursList';
import AddColour from './AddColour';
import Colour from './Colour';

const Routing = () => {
    const INITIAL_STATE = [{
        name: 'silver',
        hex: '#999CA4'
    }]

    const [colours, setColours] = useState(INITIAL_STATE);
    const addNewColour = (name, hex) => {
        setColours(colours => [...colours, {name, hex}])
    }

    return (
        <Routes>
          <Route path='/colours' element={<ColoursList colours={colours} />}></Route>
          <Route path ='/colours/new' element={<AddColour addNewColour={addNewColour} />}></Route>
          <Route path ='/colours/:colour/*' element={<Colour colours={colours} />}></Route>
          <Route path="*" element={<Navigate to="/colours" replace />}/>
        </Routes>
    )
}

export default Routing;