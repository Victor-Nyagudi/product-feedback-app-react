import { PropTypes } from "prop-types";
import DropdownMenu from "../../shared/DropdownMenu";

function Input({ 
    hasDropdown, 
    id, 
    inputType, 
    inputName, 
    inputValue, 
    handleOnChange, 
    isRequired }
) {
    const dropdownMenuItems = [
        { buttonText: 'Feature', isSelected: true },
        { buttonText: 'UI', isSelected: false },
        { buttonText: 'UX', isSelected: false },
        { buttonText: 'Enhancement', isSelected: false },
        { buttonText: 'Bug', isSelected: false },
    ];

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
                    onChange={ e => handleOnChange(e.target.value) }
                />

                :

                <div className="input--dropdown">
                    <input 
                        required={ isRequired }
                        className='input'
                        type={ `${inputType}` } 
                        name={ `${inputName}` } 
                        id={ `${id}` } 
                        value={ inputValue }
                        onChange={ e => handleOnChange(e.target.value) }
                    />

                    <button type="button" className="input__dropdown-toggle button">
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1l4 4 4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>
                    </button>

                    <DropdownMenu dropdownItems={ dropdownMenuItems } />
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
    isRequired: PropTypes.bool
}

export default Input;