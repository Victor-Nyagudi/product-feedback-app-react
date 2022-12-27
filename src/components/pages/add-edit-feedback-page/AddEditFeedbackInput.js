import { PropTypes } from "prop-types";

import TextArea from '../../shared/TextArea';
import Input from './Input';

/*
    * This is another place where it would've been better to pass an object
    * with the related properties instead of many props. FeedbackItem.js is the
    * other culprit. *sigh* Decisions. Decisions.
*/
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
    updateReadOnlyValue,
    dropdownItemType,
    showValidationMessage 
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
                    showValidationMessage={ showValidationMessage }
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
                    dropdownItemType={ dropdownItemType }
                    showValidationMessage={ showValidationMessage }
                />
            }

            <div className={ showValidationMessage ? "add-edit-feedback__validation" : "add-edit-feedback__validation--hidden" }>
                <p className="add-edit-feedback__validation-message">Can't be empty</p>
            </div>
        </div>
    );
}

AddEditFeedbackInput.defaultProps = {
    hasIcon: false,
    inputType: 'text',
    isTextArea: false,
    isRequired: false,
    showValidationMessage: false
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
    updateReadOnlyValue: PropTypes.func,
    dropdownItemType: PropTypes.string,
    showValidationMessage: PropTypes.bool
}

export default AddEditFeedbackInput;