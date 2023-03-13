import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import CommentReplyForm from "./CommentReplyForm";
import FeedbackItemCommentReply from "./FeedbackItemCommentReply";
import useToggle from '../../../hooks/useToggle';

function FeedbackItemComment({ 
    commentText, 
    commenter, 
    replies,
    commentId 
}) {
    /*
        * Since the user's first name is used in naming their image, I can
        * piggyback on this and use it to determine the path to the image using
        * require('image path here-userFirstName.jpg').
        
        * import statements were my first choice, but I saw this as a fragile option
        * because if new users were added, I'd have to remember to add an import statement.
        * With this approach, as long the user's first name is also used in naming their image,
        * everything will be fine. It can even be configured to use a user's first and last name
        * in the event two people share names, or even include a middle name in the mix.
    */
    const commenterFirstName = commenter.name.split(' ')[0].toLowerCase();
    
    const toggler = useToggle();

    const [shouldShowCommentForm, setShouldShowCommentForm] = useState(false);

    function toggleCommentReplyForm(commentFormIsVisible) {
        if (commentFormIsVisible)
            setShouldShowCommentForm(false);
        
        else
            setShouldShowCommentForm(true);
    }


    return (    
        <li className="feedback-detail__comment">
            <div className="comment__img-container">
                <img src={ require(`../../../assets/user-images/image-${commenterFirstName}.jpg`) } alt={`${commenterFirstName}'s headshot`} className="comment__user-img" />
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
                        onClick={ () => toggler.toggleComponent(true) }
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
                shouldShow={ toggler.shouldShowComponent }
                toggleCommentReplyForm={ toggler.toggleComponent }
                commentId={ commentId }
            />

            {
                replies.length > 0 && 

                <ul className="comment__replies">
                    {
                        replies.map((reply, index) => 
                            <FeedbackItemCommentReply 
                                key={ index }
                                replyText={ reply.content }
                                replyingTo={ reply.replyingTo }
                                personReplying={ reply.user }
                                topLevelCommentId={ commentId }
                            />
                        )
                    }
                </ul>
            }
        </li>
    );
}

FeedbackItemComment.propTypes = { 
    commentText: PropTypes.string.isRequired,
    commenter: PropTypes.object.isRequired,
    replies: PropTypes.arrayOf(PropTypes.object),
    commentId: PropTypes.number.isRequired
};

export default FeedbackItemComment;