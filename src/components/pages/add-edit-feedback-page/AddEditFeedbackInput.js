import React, { useState } from 'react';

function AddEditFeedbackInput({ title, labelText, id, inputName, inputType = 'text' }) {
    const [inputValue, setInputValue] = useState('');

    return (    
        <div className="add-edit-feedback__input-info">
            <h2 className="add-edit-feedback__input-title">
                { title }
            </h2>

            <label htmlFor={ `${id}` } className="add-edit-feedback__label">
                { labelText }
            </label>

            <input 
                type={ `${inputType}` } 
                name={ `${inputName}` } 
                id={ `${id}` } 
                value={ inputValue }
                onChange={ e => setInputValue(e.target.value) }
            />
        </div>
    );
}

export default AddEditFeedbackInput;