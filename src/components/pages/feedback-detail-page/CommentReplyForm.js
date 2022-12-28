import React, { useState, useContext } from 'react';
import { PropTypes } from "prop-types";

import CurrentUserContext from '../../shared/currentUserContext';
import { FeedbackItemToShowContext, UpdateFeedbackItemContext } from '../../shared/currentUserContext';

import Button from "../../shared/Button";
import TextArea from "../../shared/TextArea";

function CommentReplyForm({ shouldShow, commentId, toggleCommentReplyForm }) {
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

        if (originalCommentUser) {
            setReply({
                content: target.value,
                replyingTo: originalCommentUser.username,
                user: currentUser
            });
        }
    }

    console.log(reply);

    function handleSubmit(e) {
        e.preventDefault();
        
        // * If id supplied, then user is replying to a comment
        if (commentId) {
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
            })
        }

        else {
            console.log('Replying to a reply');
        }

        setReply({
            content: '',
            replyingTo: '',
            user: currentUser
        });

        toggleCommentReplyForm(true);
    }

    return ( 
        <div className={ shouldShow ? "comment__reply-form-container" : "comment__reply-form-container--hidden" }>
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
    shouldShow: PropTypes.bool
}

export default CommentReplyForm;