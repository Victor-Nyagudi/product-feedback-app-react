import { PropTypes } from "prop-types";

function Button({ text, className, icon, type }) {
    return ( 
        /*
            ? These are the options for each button className

            * Purple - 'button--add-feedback'
            * Blue - 'button--edit-feedback'
            * Black - 'button--cancel'
            
            ? I understand I should've given them more meaningful names
            ? like 'button--purple', but I missed the fact that the text
            ? inside similarly-colored buttons could differ depending
            ? on the page in the design. This is tentatively something
            ? that could be changed in the future.
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