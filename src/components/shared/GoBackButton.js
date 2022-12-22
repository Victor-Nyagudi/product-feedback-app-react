import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

function GoBackButton({ iconColor }) {
    /*
        * Passing -1 to navigate() is equivalent to hitting the back button
        * next to the browser URL. Read more about it here:
        * https://reactrouter.com/en/main/hooks/use-navigate
    */
    const navigate = useNavigate();
    
    return (    
        <button 
            className="go-back__primary-button button"
            onClick={ () => navigate(-1) }
        >
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L2 5l4-4" stroke={ iconColor } strokeWidth="2" fill="none" fillRule="evenodd"/>
            </svg>

            <span className="go-back__primary-button-text">
                Go Back
            </span>
        </button>
    );
}

GoBackButton.defaultProps = { iconColor: '#4661E6' }

GoBackButton.propTypes = { iconColor: PropTypes.string }

export default GoBackButton;