import React, { useState } from 'react';

import TextArea from "../../shared/TextArea";

// TODO: Remember to implement handleChange function to handle input change

function FeedbackDetailAddComment() {
    const [maxLength, setMaxLength] = useState(250);
    const [typedCharacters, setTypedCharacters] = useState(0);

    function handleChange(value) {
        console.log('This will handle textarea change event');
        
        /* 
            * value.length returns the total characters currently typed        
            * If total characters go up by 1, maxLength reduces by 1
        */

        if ((value.length - typedCharacters) === 1) 
            setMaxLength(maxLength - 1);
        
        // * This takes into account if lots of text is copy/pasted or deleted at once
        else
            setMaxLength(maxLength + (typedCharacters - value.length));

        setTypedCharacters(value.length);
    }

    return ( 
        <section className="feedback-detail__add-comment">
            <h2 className="add-comment__title">
                Add Comment
            </h2>

            <form className="add-comment__form">
                <TextArea 
                    name={ 'add-feedback-message-comment' }
                    id={ 'add-feedback-message-comment' }
                    placeholder={ 'Type your comment here' }
                    handleOnChange={ handleChange }
                />   

                <div className="add-comment__button-container">
                    <p className="add-comment__character-limit-message">
                        <span className="add-comment__character-limit">{ maxLength }</span> Characters left
                    </p>
                    
                    <button type="submit" className="button button--main button--add-feedback">
                        Post Comment
                    </button>
                </div>
            </form>
        </section>
    );
}

export default FeedbackDetailAddComment;