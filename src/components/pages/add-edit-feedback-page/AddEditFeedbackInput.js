import React, { useState } from 'react';

function AddEditFeedbackInput({ 
    title, 
    labelText, 
    id, 
    inputName, 
    inputType = 'text',
    isTextArea = false 
}) {
    const [inputValue, setInputValue] = useState('');

    return (    
        <div className="add-edit-feedback__input-info">
            <h2 className="add-edit-feedback__input-title">
                { title }
            </h2>

            <label htmlFor={ `${id}` } className="add-edit-feedback__label">
                { labelText }
            </label>

            {
                isTextArea ? 

                <textarea 
                    className='add-edit-feedback__textarea'
                    name={ `${inputName}` } 
                    id={ `${id}` } 
                    cols="30" 
                    rows="10"
                    value={ inputValue }
                    onChange={ e => setInputValue(e.target.value) }
                />

                :
                
                <input 
                    type={ `${inputType}` } 
                    name={ `${inputName}` } 
                    id={ `${id}` } 
                    value={ inputValue }
                    onChange={ e => setInputValue(e.target.value) }
                />
            }
        </div>
    );
}

export default AddEditFeedbackInput;