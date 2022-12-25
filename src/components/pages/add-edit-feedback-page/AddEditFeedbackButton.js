import Button from "../../shared/Button";
import { PropTypes } from "prop-types";

function AddEditFeedbackButton({ text, className, type, isLink }) {
    return ( 
        // * Button is wrapped around a div for styling purposes
        <div className="add-edit-feedback__button-container">
            <Button 
                type={ type }
                text={ text } 
                className={ className } 
                isLink={ isLink }
            />
        </div>
    );
}

AddEditFeedbackButton.defaultProps = { type: 'button' }

AddEditFeedbackButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string
}

export default AddEditFeedbackButton;