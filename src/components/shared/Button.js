import { PropTypes } from "prop-types";

function Button({ text, className, icon, type }) {
    return ( 
        /*
            ? These are the options for each button type's className

            * Purple - 'button--add-feedback'
            * Blue - 'button--edit-feedback'
            * Black - 'button--cancel'
        */
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