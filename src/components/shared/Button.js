import { PropTypes } from "prop-types";

function Button({ text, className, icon, type }) {
    return ( 
        <button 
            type={ `${type}` }
            className={ className ? `${className} button button--main` : 'button--add-feedback button button--main' }
        >
            { icon }
            { text }
        </button>
    );
}

Button.defaultProps = { type: 'button' }

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.node
}

export default Button;