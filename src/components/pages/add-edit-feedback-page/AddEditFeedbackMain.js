import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import AddEditFeedbackButton from "./AddEditFeedbackButton";
import AddEditFeedbackInput from "./AddEditFeedbackInput";

function AddEditFeedbackMain({ 
    title, 
    isEditing,
    feedbackItems,
    addFeedbackItem,
    updateFeedbackItem
}) {
    const [feedbackItem, setFeedbackItem] = useState({
        id: feedbackItems.length + 1,
        title: '',
        description: '',
        category: '',
        comments: [],
        status: 'suggestion',
        upvotes: 0
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        addFeedbackItem(feedbackItem);
        
        setFeedbackItem({
            id: feedbackItems.length + 1,
            title: '',
            description: '',
            category: '',
            comments: [],
            status: 'suggestion',
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
            {
                isEditing ? 

                <svg className="add-edit-feedback__icon" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%"/><stop stopColor="#A337F6" offset="53.089%"/><stop stopColor="#28A7ED" offset="100%"/></radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx="20" cy="20" r="20"/><path d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z" fill="#FFF" fillRule="nonzero"/>
                    </g>
                </svg>

                : 

                <svg className="add-edit-feedback__icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%"/><stop stopColor="#A337F6" offset="53.089%"/><stop stopColor="#28A7ED" offset="100%"/></radialGradient></defs><g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28"/><path fill="#FFF" fillRule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"/></g>
                </svg>
            }

            <h1 className="add-edit-feedback__title">
                { isEditing ? `Editing '${title}'` : 'Create New Feedback' }
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
    title: PropTypes.string,
    isEditing: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    addFeedbackItem: PropTypes.func.isRequired,
    updateFeedbackItem: PropTypes.func.isRequired 
}

export default AddEditFeedbackMain;