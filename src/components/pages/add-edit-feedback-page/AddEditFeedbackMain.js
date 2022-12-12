import AddEditFeedbackButton from "./AddEditFeedbackButton";
import AddEditFeedbackInput from "./AddEditFeedbackInput";

function AddEditFeedbackMain({ title, isEditing }) {
    return ( 
        <main className="add-edit-feedback__main">
            <h1 className="add-edit-feedback__title">
                { isEditing ? `Editing '${title}'` : 'Create New Feedback' }
            </h1>

            <form className="add-edit-feedback__form">
                <AddEditFeedbackInput 
                    title={ 'Feedback Title' }
                    labelText={ 'Add a short,descriptive headline' }
                    id={ 'feedback-title' }
                    inputName={ 'feedback-title' }
                />
                
                <AddEditFeedbackInput 
                    title={ 'Category' }
                    labelText={ 'Choose a category for your feedback' }
                    id={ 'feedback-category' }
                    inputName={ 'feedback-category' }
                />

                {
                    isEditing && 

                    <AddEditFeedbackInput 
                        title={ 'Update Status' }
                        labelText={ 'Change feedback state' }
                        id={ 'feedback-state' }
                        inputName={ 'feedback-state' }
                    />                    
                }

                <AddEditFeedbackInput 
                    isTextArea={ true }
                    title={ 'Feedback Detail' }
                    labelText={ 'Include any specific comments on what should be improved, added, ect.' }
                    id={ 'feedback-detail' }
                    inputName={ 'feedback-detail' }
                />

                <div className="add-edit-feedback__buttons">
                    {
                        isEditing &&

                        <AddEditFeedbackButton 
                            text={ 'Delete' }
                            className={ 'button--delete' } 
                        />

                    }

                    <AddEditFeedbackButton 
                        text={ 'Cancel' }
                        className={ 'button--cancel' } 
                    />

                    <AddEditFeedbackButton 
                        text={ 'Add Feedback' }
                        className={ 'button--add-feedback' } 
                    />
                </div>
            </form>
        </main>
    );
}

export default AddEditFeedbackMain;