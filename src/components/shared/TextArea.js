import { PropTypes } from "prop-types";

function TextArea({ 
    name, 
    id, 
    value, 
    placeholder, 
    handleOnChange, 
    isRequired,
    maxLength,
    showValidationMessage 
}) {
    return ( 
        <textarea 
            required={ isRequired }
            className={ showValidationMessage ? 'textarea--error' : 'textarea'}
            name={ name } 
            id={ id } 
            value={ value }
            placeholder={ placeholder }
            maxLength={ maxLength }
            onChange={ e => handleOnChange(e.target) }
        />
    );
}

TextArea.defaultProps = {
    placeholder: '',
    isRequired: false,
    maxLength: 250,
    showValidationMessage: false
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    maxLength: PropTypes.number,
    showValidationMessage: PropTypes.bool
}

export default TextArea;