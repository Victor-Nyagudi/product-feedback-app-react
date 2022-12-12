import Button from "../../shared/Button";

function AddEditFeedbackButton({ text, className }) {
    return ( 
        <div className="add-edit-feedback__button-container">
            <Button 
                text={ text } 
                className={ className } 
            />
        </div>
    );
}

export default AddEditFeedbackButton;