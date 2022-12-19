import Button from "../../shared/Button";
import { PropTypes } from "prop-types";

function AddEditFeedbackButton({ text, className, type }) {
    return ( 
        <div className="add-edit-feedback__button-container">
            <Button 
                type={ type }
                text={ text } 
                className={ className } 
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