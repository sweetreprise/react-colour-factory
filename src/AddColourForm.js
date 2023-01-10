import React, { useState } from 'react';

const AddColourForm = ({ addNewColour }) => {
    const INITIAL_STATE = {
        name: '',
        hex: '#000000'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewColour(formData.name, formData.hex);
        alert('Successfully added!')
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Give you colour a name:</label>
            <input 
                type='text'
                id='name'
                name='name'
                placeholder='Eg. Rainbow'
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor='hex'>Colour:</label>
            <input
                type='color'
                id='hex'
                name='hex'
                value={formData.hex}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    )
}

export default AddColourForm;