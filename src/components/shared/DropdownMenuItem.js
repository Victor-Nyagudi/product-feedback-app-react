import { PropTypes } from "prop-types";

function DropdownMenuItem({ isSelected, buttonText, setActive, index }) {
    return (
        <li className="dropdown-menu__item">
            <button 
                className={ isSelected ? 'dropdown-menu__button--active button' : 'dropdown-menu__button button' }
                onClick={ () => setActive(index) }
            >
                <span className="dropdown-menu__button-text">
                    { buttonText }
                </span>

                {
                    isSelected &&

                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" aria-hidden="true">
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
    buttonText: PropTypes.string.isRequired
}

export default DropdownMenuItem;