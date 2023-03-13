import { PropTypes } from "prop-types";
import React, { useState } from 'react';

import useToggle from "../../../hooks/useToggle";

import DropdownMenu from "../../shared/DropdownMenu";

function Input({ 
    hasDropdown, 
    id, 
    inputType, 
    inputName, 
    inputValue, 
    isRequired, 
    handleOnChange, 
    updateReadOnlyValue,
    dropdownItemType,
    showValidationMessage
}) {
    let dropdownMenuItems;

    const toggler = useToggle();

    if (dropdownItemType.toLowerCase() === 'category') {
        dropdownMenuItems = [
            { buttonText: 'Feature', isSelected: true },
            { buttonText: 'UI', isSelected: false },
            { buttonText: 'UX', isSelected: false },
            { buttonText: 'Enhancement', isSelected: false },
            { buttonText: 'Bug', isSelected: false }
        ];
    }

    else if (dropdownItemType.toLowerCase() === 'status') {
        dropdownMenuItems = [
            { buttonText: 'Suggestion', isSelected: true },
            { buttonText: 'Planned', isSelected: false },
            { buttonText: 'In Progress', isSelected: false },
            { buttonText: 'Live', isSelected: false }
        ];
    }

    else {
        dropdownMenuItems = [
            { buttonText: 'Feature', isSelected: true },
            { buttonText: 'UI', isSelected: false },
            { buttonText: 'UX', isSelected: false },
            { buttonText: 'Enhancement', isSelected: false },
            { buttonText: 'Bug', isSelected: false }
        ];
    }


    function changeInputValue(value) {
        updateReadOnlyValue(inputName, value);
    }


    return (    
        <>
            { 
                !hasDropdown ?
                
                <input 
                    required={ isRequired }
                    className={ showValidationMessage ? 'input--error' : 'input' }
                    type={ `${inputType}` } 
                    name={ `${inputName}` } 
                    id={ `${id}` } 
                    value={ inputValue }
                    onChange={ e => handleOnChange(e.target) }
                />

                :

                <div 
                    className="input--dropdown"
                    data-testid="input-with-dropdown"
                >
                    <input 
                        readOnly
                        required={ isRequired }
                        className={ showValidationMessage ? 'input--error' : 'input' }
                        type={ `${inputType}` } 
                        name={ `${inputName}` } 
                        id={ `${id}` } 
                        value={ inputValue }
                        onChange={ e => handleOnChange(e.target) }
                    />

                    <button 
                        type="button" 
                        className="input__dropdown-toggle button"
                        onClick={ () => toggler.toggleComponent(true) }
                        aria-label="Open dropdown"
                    >
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1l4 4 4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>
                    </button>

                    <DropdownMenu 
                        dropdownItems={ dropdownMenuItems } 
                        updateText={ changeInputValue }
                        toggleDropdownMenu={ toggler.toggleComponent }
                        shouldShow={ toggler.shouldShowComponent }
                    />
                </div>
            }
        </>
    );
}

Input.defaultProps = {
    isRequired: false,
    dropdownItemType: 'category',
    showValidationMessage: false
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    updateReadOnlyValue: PropTypes.func,
    dropdownItemType: PropTypes.string,
    showValidationMessage: PropTypes.bool
}

export default Input;