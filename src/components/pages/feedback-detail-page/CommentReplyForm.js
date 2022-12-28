import React, { useState, useContext } from 'react';
import { PropTypes } from "prop-types";

import CurrentUserContext from '../../shared/currentUserContext';
import { FeedbackItemToShowContext, UpdateFeedbackItemContext } from '../../shared/currentUserContext';

import Button from "../../shared/Button";
import TextArea from "../../shared/TextArea";

function CommentReplyForm({ shouldShow, commentId }) {
    const currentUser = useContext(CurrentUserContext);
    const currentFeedbackItem = useContext(FeedbackItemToShowContext);
    const updateFeedbackItem = useContext(UpdateFeedbackItemContext);
    
    const [reply, setReply] = useState({
        content: '',
        replyingTo: '',
        user: currentUser
    });


    console.log(currentFeedbackItem.comments
        .filter(comment => comment.id === commentId)
        .map(comment => comment.user)[0]);

        console.log(currentFeedbackItem);

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
        // * If id supplied, then user is replying to a comment
        e.preventDefault();
        
        if (commentId) {
            const currentComment = currentFeedbackItem.comments
                .filter(comment => comment.id === commentId)[0];

            /*
                * Replies are deeply nested inside a comment hence the
                * complicated 'map()' function
            */ 
            // updateFeedbackItem(currentFeedbackItem.id, { 
            //     ...currentFeedbackItem, 
            //     comments: [ 
            //         currentFeedbackItem.comments
            //             .map(comment => comment.id === currentComment.id ? 
            //                     { ...comment, replies: [...comment.replies, reply] } : comment
            //                 ) 
            //     ] 
            // })

            console.log(currentComment.replies);

            updateFeedbackItem(currentFeedbackItem.id, { ...currentFeedbackItem });
        }

        setReply({
            content: '',
            replyingTo: '',
            user: currentUser
        });
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