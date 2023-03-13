import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import TextArea from "../../shared/TextArea";

// TODO: Remember to implement handleChange function to handle input change

function FeedbackDetailAddComment({ 
    feedbackItem, 
    currentUser,
    updateFeedbackItem 
}) {
    const [maxLength, setMaxLength] = useState(250);
    const [typedCharacters, setTypedCharacters] = useState(0);

    const [commentToAdd, setCommentToAdd] = useState(
        {
            id: 0,
            content: '',
            user: {
                name: '',
                username: '',
                image: ''
            }
        }
    );

    useEffect(() => {
        if (currentUser) {
            setCommentToAdd({
                id: feedbackItem.comments.length + 1,
                content: '',
                user: {
                    name: currentUser.name,
                    username: currentUser.username,
                    image: currentUser.image
                }
            });
        }
    }, []);

    function handleChange(target) {
        /* 
            * value.length returns the total characters currently typed        
            * If total characters go up by 1, maxLength reduces by 1
        */

        if ((target.value.length - typedCharacters) === 1) 
            setMaxLength(maxLength - 1);
        
        // * This takes into account if lots of text is copy/pasted or deleted at once
        else
            setMaxLength(maxLength + (typedCharacters - target.value.length));

        setTypedCharacters(target.value.length);

        setCommentToAdd({ ...commentToAdd, content: target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        setCommentToAdd({
            id: feedbackItem.comments.length + 1,
            content: '',
            user: {
                name: currentUser.name,
                username: currentUser.username,
                image: currentUser.image
            }
        });

        updateFeedbackItem(feedbackItem.id, { ...feedbackItem, comments: [ ...feedbackItem.comments, commentToAdd ] });
    }

    return ( 
        <section className="feedback-detail__add-comment">
            <h2 className="add-comment__title">
                Add Comment
            </h2>

            <form 
                className="add-comment__form"
                onSubmit={ e => handleSubmit(e) }
            >
                <label htmlFor="add-feedback-message-comment" className="screen-reader-only">
                    Type your comment here
                </label>

                <TextArea 
                    name={ 'add-feedback-message-comment' }
                    id={ 'add-feedback-message-comment' }
                    placeholder={ 'Type your comment here' }
                    handleOnChange={ handleChange }
                    isRequired={ true }
                    value={ commentToAdd.content }
                />   

                <div className="add-comment__button-container">
                    <p 
                        className="add-comment__character-limit-message"
                        aria-live="polite"
                    >
                        <span className="add-comment__character-limit" data-testid="comment-character-limit">{ maxLength }</span> Characters left
                    </p>
                    
                    <button type="submit" className="button button--main button--add-feedback">
                        Post Comment
                    </button>
                </div>
            </form>
        </section>
    );
}

FeedbackDetailAddComment.propTypes = { 
    feedbackItem: PropTypes.object.isRequired, 
    currentUser: PropTypes.object,
    updateFeedbackItem: PropTypes.func
};

export default FeedbackDetailAddComment;