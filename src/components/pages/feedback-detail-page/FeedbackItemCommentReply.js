import React, { useState } from 'react';

import elijahImg from "../../../assets/user-images/image-elijah.jpg";
import CommentReplyForm from "./CommentReplyForm";

function FeedbackItemCommentReply() {
    const [shouldShowCommentForm, setShouldShowCommentForm] = useState(false);

    function toggleCommentReplyForm(isMenuOpen) {
        if (isMenuOpen)
            setShouldShowCommentForm(false);
        
        else
            setShouldShowCommentForm(true);
    }

    return ( 
        <li className="feedback-detail__comment--reply">
            <div className="comment__img-container">
                <img src={ elijahImg } alt="Elijah's headshot" className="comment__user-img" />
            </div>

            <div className="comment__header">
                <div className="comment__user-info">
                    <h3 className="comment__user-name">
                        Elijah Moss
                    </h3>
                    
                    <p className="comment__user-handle">
                        @hexagon.bestagon
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
                    Also, please allow styles to be applied on system preference. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.
                </p>
            </div>

            <CommentReplyForm 
                shouldShow={ shouldShowCommentForm }
                toggleCommentReplyForm={ toggleCommentReplyForm }
            />
        </li>
    );
}

export default FeedbackItemCommentReply;