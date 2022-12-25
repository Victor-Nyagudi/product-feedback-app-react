import { PropTypes } from "prop-types";

import TextArea from '../../shared/TextArea';
import Input from './Input';

function AddEditFeedbackInput({ 
    id, 
    hasDropdown,
    inputName, 
    inputType,
    inputValue,
    isTextArea, 
    isRequired,
    labelText,
    title,
    handleChange,
    updateReadOnlyValue 
}) {
    return (    
        <div className="add-edit-feedback__input-info">
            <h2 className="add-edit-feedback__input-title">
                { title }
            </h2>

            <label htmlFor={ `${id}` } className="add-edit-feedback__label">
                { labelText }
            </label>

            {
                isTextArea ? 

                <TextArea 
                    isRequired={ isRequired }
                    name={ inputName } 
                    id={ id } 
                    value={ inputValue }
                    handleOnChange={ handleChange }
                />

                :

                <Input 
                    isRequired={ isRequired }
                    hasDropdown={ hasDropdown }
                    inputType={ `${ inputType }` }
                    inputName={ `${ inputName }` } 
                    id={ `${ id }` }
                    inputValue={ inputValue }
                    handleOnChange={ handleChange }
                    updateReadOnlyValue={ updateReadOnlyValue }
                />
            }
        </div>
    );
}

AddEditFeedbackInput.defaultProps = {
    hasIcon: false,
    inputType: 'text',
    isTextArea: false,
    isRequired: false
}

AddEditFeedbackInput.propTypes = {
    id: PropTypes.string.isRequired,
    hasIcon: PropTypes.bool,
    isTextArea: PropTypes.bool,
    isRequired: PropTypes.bool,
    inputType: PropTypes.string,
    inputValue: PropTypes.string,
    title: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    updateReadOnlyValue: PropTypes.func
}

export default AddEditFeedbackInput;