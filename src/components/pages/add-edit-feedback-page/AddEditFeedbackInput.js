import React, { useState } from 'react';
import TextArea from '../../shared/TextArea';
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

                <TextArea 
                    name={ inputName } 
                    id={ id } 
                    value={ inputValue }
                    handleOnChange={ handleChange }
                />

                :

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