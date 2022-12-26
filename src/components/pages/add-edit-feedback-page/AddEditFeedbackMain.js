import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import AddEditFeedbackButton from "./AddEditFeedbackButton";
import AddEditFeedbackInput from "./AddEditFeedbackInput";

function AddEditFeedbackMain({ 
    feedbackItemFromDb,
    isEditing,
    feedbackItems,
    addFeedbackItem,
    updateFeedbackItem,
    deleteFeedbackItem
}) {
    const feedbackItemId = isEditing ? feedbackItemFromDb.id : feedbackItems.length + 1;
    const feedbackItemUpvotes = isEditing ? feedbackItemFromDb.upvotes : 0;
    const feedbackItemComments = isEditing ? feedbackItemFromDb.comments : [];

    const [feedbackItem, setFeedbackItem] = useState({
        id: feedbackItemId,
        title: `${isEditing ? feedbackItemFromDb.title : ''}`,
        description: `${isEditing ? feedbackItemFromDb.description : ''}`,
        category: `${isEditing ? feedbackItemFromDb.category : ''}`,
        comments: feedbackItemComments,
        status: `${isEditing ? feedbackItemFromDb.status : 'suggestion'}`,
        upvotes: feedbackItemUpvotes
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        /*
        * Found this neat way of finding which button submitted the form by first
        * logging the event object to the console and studying its properties.
        * This helps because while editing, the form can be submitted by either
        * the 'Delete' button or 'Add Feedback'.
        */
       const formSubmitter = e.nativeEvent.submitter;
       
       if (formSubmitter.innerText.toLowerCase() === 'add feedback')
           updateFeedbackItem(feedbackItemFromDb.id, feedbackItem);

        else if (formSubmitter.innerText.toLowerCase() === 'delete') 
            deleteFeedbackItem(feedbackItemFromDb.id);

       else 
           addFeedbackItem(feedbackItem);

        setFeedbackItem({
            id: feedbackItems.length + 1,
            title: '',
            description: '',
            category: '',
            comments: [],
            status: 'Suggestion',
            upvotes: 0
        });

        navigate('/');
    }

    function getReadOnlyValue(inputName, value) {
        // * This works for just the two dropdown inputs present: category & status
        if (inputName === 'feedback-category')
            setFeedbackItem({ ...feedbackItem, category: value });
        
        else if (inputName === 'feedback-status')
            setFeedbackItem({ ...feedbackItem, status: value });
    }

    function handleChange(target) {
        /*
            * One way to avoid all these checks would've been to make the 'target.name' be the
            * same as the feedback item's property name e.g. 'feedback-title' becomes
            * just 'title' and so on, and then use a computed property name i.e [name]: value
            
            * The code could've potentially been this one line.
            * setFeedbackItem({ ...feedbackItem, [target.name]: target.value});
            
            * However, this isn't working, so I reverted back to checks because it also accounts
            * for the read-only value that is updated via getReadOnlyValue() function.
            * https://reactjs.org/docs/forms.html, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
        */
        switch (target.name) {
            case 'feedback-title':
                setFeedbackItem({ ...feedbackItem, title: target.value });                
                break;
            
            case 'feedback-category':
                setFeedbackItem({ ...feedbackItem, category: target.value });                
                break;
            
            case 'feedback-status':
                setFeedbackItem({ ...feedbackItem, status: target.value });                
                break;
            
            case 'feedback-description':
                setFeedbackItem({ ...feedbackItem, description: target.value });                
                break;
        
            default:
                setFeedbackItem({ ...feedbackItem });
                break;
        }
    }

    console.log(feedbackItem);

    return ( 
        <main className="add-edit-feedback__main">
            <div className={isEditing ? "add-edit-feedback__icon--edit" : "add-edit-feedback__icon--add" }></div>

            <h1 className="add-edit-feedback__title">
                { isEditing ? `Editing '${feedbackItemFromDb.title}'` : 'Create New Feedback' }
            </h1>

            <form 
                className="add-edit-feedback__form"
                onSubmit={ e => handleSubmit(e) }
            >
                <AddEditFeedbackInput 
                    title={ 'Feedback Title' }
                    labelText={ 'Add a short, descriptive headline' }
                    id={ 'title' }
                    inputName={ 'feedback-title' }
                    inputValue={ feedbackItem.title }
                    isRequired={ true }
                    handleChange={ handleChange }
                />
                
                <AddEditFeedbackInput 
                    hasDropdown={ true }
                    dropdownItemType={ 'Category' }
                    title={ 'Category' }
                    labelText={ 'Choose a category for your feedback' }
                    id={ 'feedback-category' }
                    inputName={ 'feedback-category' }
                    inputValue={ feedbackItem.category }
                    isRequired={ true }
                    handleChange={ handleChange }
                    updateReadOnlyValue={ getReadOnlyValue }
                />

                {
                    isEditing && 

                    <AddEditFeedbackInput 
                        hasDropdown={ true }
                        dropdownItemType={ 'Status' }
                        title={ 'Update Status' }
                        labelText={ 'Change feedback state' }
                        id={ 'feedback-status' }
                        inputName={ 'feedback-status' }
                        inputValue={ feedbackItem.status }
                        isRequired={ true }
                        handleChange={ handleChange }
                        updateReadOnlyValue={ getReadOnlyValue }
                    />                    
                }

                <AddEditFeedbackInput 
                    title={ 'Feedback Detail' }
                    labelText={ 'Include any specific comments on what should be improved, added, etc.' }
                    id={ 'feedback-description' }
                    inputName={ 'feedback-description' }
                    inputValue={ feedbackItem.description }
                    isTextArea={ true }
                    isRequired={ true }
                    handleChange={ handleChange }
                />

                <div className={ isEditing ? "add-edit-feedback__buttons--editing" : "add-edit-feedback__buttons" }>
                    {
                        isEditing &&

                        <AddEditFeedbackButton 
                            text={ 'Delete' }
                            className={ 'button--delete add-edit-feedback__button' } 
                            type={ 'submit' }
                        />

                    }

                    <AddEditFeedbackButton 
                        text={ 'Cancel' }
                        className={ 'button--cancel add-edit-feedback__button' } 
                    />

                    <AddEditFeedbackButton 
                        text={ 'Add Feedback' }
                        className={ 'button--add-feedback add-edit-feedback__button' }
                        type={ 'submit' } 
                    />
                </div>
            </form>
        </main>
    );
}

AddEditFeedbackMain.defaultProps = { isEditing: false }

AddEditFeedbackMain.propTypes = {
    isEditing: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    addFeedbackItem: PropTypes.func.isRequired,
    updateFeedbackItem: PropTypes.func.isRequired,
    deleteFeedbackItem: PropTypes.func.isRequired,
    feedbackItemFromDb: PropTypes.object 
}

export default AddEditFeedbackMain;