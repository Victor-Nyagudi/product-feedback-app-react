import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import elijahImg from "../../../assets/user-images/image-elijah.jpg";
import CommentReplyForm from "./CommentReplyForm";
import FeedbackItemCommentReply from "./FeedbackItemCommentReply";

function FeedbackItemComment({ commentText, commenter }) {
    /*
        * Similar thing happening here with a comment form instead of 
        * a dropdown menu like in SuggestionsHeader.js and Input.js
        * where it's toggled to show/hide it
    */
    const [shouldShowCommentForm, setShouldShowCommentForm] = useState(false);

    function toggleCommentReplyForm(isMenuOpen) {
        if (isMenuOpen)
            setShouldShowCommentForm(false);
        
        else
            setShouldShowCommentForm(true);
    }

    return (    
        <li className="feedback-detail__comment">
            <div className="comment__img-container">
                <img src={ elijahImg } alt="Elijah's headshot" className="comment__user-img" />
            </div>

            <div className="comment__header">
                <div className="comment__user-info">
                    <h3 className="comment__user-name">
                        { commenter.name }
                    </h3>
                    
                    <p className="comment__user-handle">
                        { `@${commenter.username}` }
                    </p>
                </div>
                
                <div className="comment__reply-container">
                    <button 
                        type="button" 
                        className="comment__reply-button button"
                        onClick={ () => toggleCommentReplyForm(false) }
                    >
                        Reply
                    </button>
                </div>
            </div>
            
            <div className="comment__message-container">
                <p className="comment__message">
                    { commentText }
                </p>
            </div>

            <CommentReplyForm 
                shouldShow={ shouldShowCommentForm }
                toggleCommentReplyForm={ toggleCommentReplyForm }
            />

            <ul className="comment__replies">
                <FeedbackItemCommentReply />
                <FeedbackItemCommentReply />
            </ul>
        </li>
    );
}

FeedbackItemComment.propTypes = { 
    commentText: PropTypes.string.isRequired,
    commenter: PropTypes.object.isRequired
};

export default FeedbackItemComment;