import Button from "../../shared/Button";

function AddEditFeedbackButton({ text, className, type = 'button' }) {
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

export default AddEditFeedbackButton;