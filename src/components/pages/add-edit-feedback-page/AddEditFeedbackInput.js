import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import TextArea from '../../shared/TextArea';
import Input from './Input';

function AddEditFeedbackInput({ 
    hasDropdown,
    id, 
    inputName, 
    inputType,
    isTextArea, 
    isRequired,
    labelText,
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
                    isRequired={ isRequired }
                    name={ inputName } 
                    id={ id } 
                    value={ inputValue }
                    handleOnChange={ handleChange }
                />

                :

                <Input 
                    isRequired={ isRequired }
                    hasDropdown={ hasDropdown }
                    inputType={ `${ inputType }` }
                    inputName={ `${ inputName }` } 
                    id={ `${ id }` }
                    value={ inputValue }
                    handleOnChange={ handleChange }
                />
            }
        </div>
    );
}

AddEditFeedbackInput.defaultProps = {
    hasIcon: false,
    inputType: 'text',
    isTextArea: false,
    isRequired: false
}

AddEditFeedbackInput.propTypes = {
    hasIcon: PropTypes.bool,
    id: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    isTextArea: PropTypes.bool,
    isRequired: PropTypes.bool,
    labelText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default AddEditFeedbackInput;