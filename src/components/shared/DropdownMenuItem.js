import { PropTypes } from "prop-types";

function DropdownMenuItem({ 
    isSelected, 
    buttonText, 
    setActive, 
    index,
    toggleDropdownMenu 
}) {
    function handleClick(index) {
        setActive(index);

        toggleDropdownMenu(false);
    }

    return (
        <li className="dropdown-menu__item">
            <button 
                type="button"
                className={ isSelected ? 'dropdown-menu__button--active button' : 'dropdown-menu__button button' }
                onClick={ () => handleClick(index) }
            >
                <span className="dropdown-menu__button-text">
                    { buttonText }
                </span>

                {
                    isSelected &&

                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" aria-hidden="true" data-testid="checkmark">
                        <path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1" />
                    </svg>
                }
            </button>
        </li>
    );
}

DropdownMenuItem.defaultProps = { isSelected: false }

DropdownMenuItem.propTypes = { 
    isSelected: PropTypes.bool, 
    buttonText: PropTypes.string.isRequired,
    setActive: PropTypes.func,
    index: PropTypes.number,
    toggleDropdownMenu: PropTypes.func.isRequired
}

export default DropdownMenuItem;