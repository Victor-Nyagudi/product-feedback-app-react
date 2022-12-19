import { PropTypes } from "prop-types";

function TextArea({ name, id, value, placeholder, handleOnChange, isRequired }) {
    return ( 
        <textarea 
            required={ isRequired }
            className='textarea'
            name={ name } 
            id={ id } 
            value={ value }
            placeholder={ placeholder }
            onChange={ e => handleOnChange(e.target.value) }
        />
    );
}

TextArea.defaultProps = {
    placeholder: '',
    isRequired: false
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool
}

export default TextArea;