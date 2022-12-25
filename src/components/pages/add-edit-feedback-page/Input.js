import { PropTypes } from "prop-types";
import React, { useState } from 'react';

import DropdownMenu from "../../shared/DropdownMenu";

function Input({ 
    hasDropdown, 
    id, 
    inputType, 
    inputName, 
    inputValue, 
    isRequired, 
    handleOnChange, 
    updateReadOnlyValue
}) {

    const dropdownMenuItems = [
        { buttonText: 'Feature', isSelected: true },
        { buttonText: 'UI', isSelected: false },
        { buttonText: 'UX', isSelected: false },
        { buttonText: 'Enhancement', isSelected: false },
        { buttonText: 'Bug', isSelected: false },
    ];

    const [inputText, setInputText] = useState(dropdownMenuItems[0].buttonText);

    function changeInputValue(value) {
        updateReadOnlyValue(inputName, value);

        setInputText(value);
    }

    /*
        * shouldShowDropdownMenu state and toggleDropdownMenu function are copied from SuggestionHeader
        * since both these components have a dropdown. For a project like this
        * where the dropdown is only used in two pages, this can work, but for
        * bigger projects, a more robust solution could be better.
        
        * Then again, I also thought that giving each component its own state is good so
        * that it can be controlled independently rather than by a shared parent.
    */
    const [shouldShowDropdownMenu, setShouldShowDropdownMenu] = useState(false);

    function toggleDropdownMenu(isMenuOpen) {
        if (isMenuOpen)
            setShouldShowDropdownMenu(false);
        
        else
            setShouldShowDropdownMenu(true);
    }

    return (    
        <>
            { 
                !hasDropdown ?
                
                <input 
                    required={ isRequired }
                    className='input'
                    type={ `${inputType}` } 
                    name={ `${inputName}` } 
                    id={ `${id}` } 
                    value={ inputValue }
                    onChange={ e => handleOnChange(e.target) }
                />

                :

                <div className="input--dropdown">
                    <input 
                        readOnly
                        required={ isRequired }
                        className='input'
                        type={ `${inputType}` } 
                        name={ `${inputName}` } 
                        id={ `${id}` } 
                        value={ inputValue }
                        onChange={ e => handleOnChange(e.target) }
                    />

                    <button 
                        type="button" 
                        className="input__dropdown-toggle button"
                        onClick={ () => toggleDropdownMenu(false) }
                    >
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1l4 4 4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>
                    </button>

                    <DropdownMenu 
                        dropdownItems={ dropdownMenuItems } 
                        updateText={ changeInputValue }
                        toggleDropdownMenu={ toggleDropdownMenu }
                        shouldShow={ shouldShowDropdownMenu }
                    />
                </div>
            }
        </>
    );
}

Input.defaultProps = {
    hasIcon: false,
    isRequired: false
}

Input.propTypes = {
    hasIcon: PropTypes.bool,
    id: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    updateReadOnlyValue: PropTypes.func
}

export default Input;