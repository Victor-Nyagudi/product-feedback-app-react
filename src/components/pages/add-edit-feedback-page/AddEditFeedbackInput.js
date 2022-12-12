import React, { useState } from 'react';
import Input from './Input';

function AddEditFeedbackInput({ 
    hasIcon = false,
    id, 
    inputName, 
    inputType = 'text',
    isTextArea = false, 
    labelText ,
    title 
}) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(value) {
        setInputValue(value)
    }

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
                    onChange={ e => handleChange(e.target.value) }
                />

                :

                // <input 
                //     className={ `${hasIcon ? 'add-edit-feedback__input--icon' : 'add-edit-feedback__input'}` }
                //     type={ `${inputType}` } 
                //     name={ `${inputName}` } 
                //     id={ `${id}` } 
                //     value={ inputValue }
                //     onChange={ e => setInputValue(e.target.value) }
                // />

                <Input 
                    hasIcon={ hasIcon }
                    type={ `${ inputType }` }
                    name={ `${ inputName }` } 
                    id={ `${ id }` }
                    value={ inputValue }
                    handleOnChange={ handleChange }
                />
            }
        </div>
    );
}

export default AddEditFeedbackInput;