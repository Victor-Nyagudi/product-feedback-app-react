import React, { useState, useContext } from 'react';
import { PropTypes } from "prop-types";

import CurrentUserContext from '../../shared/currentUserContext';
import { FeedbackItemToShowContext, UpdateFeedbackItemContext } from '../../shared/currentUserContext';

import Button from "../../shared/Button";
import TextArea from "../../shared/TextArea";

function CommentReplyForm({ 
    shouldShow, 
    commentId, 
    toggleCommentReplyForm,
    replyUsername,
    replyingToReply 
}) {
    const currentUser = useContext(CurrentUserContext);
    const currentFeedbackItem = useContext(FeedbackItemToShowContext);
    const updateFeedbackItem = useContext(UpdateFeedbackItemContext);
    
    const [reply, setReply] = useState({
        content: '',
        replyingTo: '',
        user: currentUser
    });

    function handleChange(target) {
        const originalCommentUser = currentFeedbackItem.comments
            .filter(comment => comment.id === commentId) // * <- Get the current comment
            .map(comment => comment.user)[0]; // * <- Get the user who made the comment

        /*
            * Since the way replies are added is the same,
            * the 'replyingToReply' bool just changes the @ in the reply. 
        */

        setReply({
            content: target.value,
            replyingTo: replyingToReply ? replyUsername : originalCommentUser.username,
            user: currentUser
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const currentComment = currentFeedbackItem.comments
            .filter(comment => comment.id === commentId)[0];

        /*
            * Referencing the to-do list I built after following Traversy's React 
            * tutorial helped immensely with figuring out how to navigate down to the 
            * nested property and still update the entire feedback item.
            * https://youtu.be/w7ejDZ8SWv8?t=5511
            
            * Replies are deeply nested inside a comment hence the
            * complicated 'map()' function. 
        */ 
        updateFeedbackItem(currentFeedbackItem.id, { 
            ...currentFeedbackItem, 
            comments: currentFeedbackItem.comments
                .map(comment => comment.id === currentComment.id ? 
                    { ...comment, replies: [...comment.replies, reply] } : comment
                ) 
        });

        setReply({
            content: '',
            replyingTo: '',
            user: currentUser
        });

        toggleCommentReplyForm(false);
    }

    return ( 
        <div 
            className={ shouldShow ? "comment__reply-form-container" : "comment__reply-form-container--hidden" }
            data-testid="comment-reply-form"
        >
            <form className="comment__reply-form" onSubmit={ e => handleSubmit(e) }>
                <div className="comment__reply-form-textarea-container">
                    <TextArea 
                        isRequired={ true }
                        name={ 'comment-reply' }
                        id={ 'comment-reply' }
                        placeholder={ 'Write a reply' }
                        handleOnChange={ handleChange }
                        value={ reply.content }
                    />
                </div>

                <div className="comment__reply-form-button-container">
                    <Button 
                        text={ 'Post Reply' }
                        className={ 'button--add-feedback' }
                        type={ 'submit' }
                    />
                </div>
            </form>
        </div>
    );
}

CommentReplyForm.propTypes = {
    shouldShow: PropTypes.bool,
    replyUsername: PropTypes.string,
    commentId: PropTypes.number,
    toggleCommentReplyForm: PropTypes.func,
    replyingToReply: PropTypes.bool
}

export default CommentReplyForm;