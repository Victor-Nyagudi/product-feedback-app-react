import { PropTypes } from "prop-types";

function GoBackButton({ iconColor }) {
    return (    
        <button className="go-back__primary-button button">
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