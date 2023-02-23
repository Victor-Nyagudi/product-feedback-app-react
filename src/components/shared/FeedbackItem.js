import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

/*
    * In hindsight, I should've passed the whole feedback item object
    * as a prop instead of individual properties, but that's a story for another day.
*/ 
function FeedbackItem({ 
    showBadge, 
    badgeText, 
    badgeColor,
    title,
    message,
    tagCategory,
    totalUpvotes,
    totalComments,
    isLink,
    id,
    getSelectedFeedbackItemId,
    updateFeedbackItem,
    feedbackItemObject
}) {
    const [userUpvoted, setUserUpvoted] = useState(localStorage.getItem(`feedbackItemId: ${id}, upvoteStatus: `));
    
    const [feedbackItem, setFeedbackItem] = useState(feedbackItemObject);

    function handleUpvoteClick() {
        try {
            // * Set upvote status to false (falsy value) since feedback item was already upvoted
            if (localStorage.getItem(`feedbackItemId: ${id}, upvoteStatus: `)) {
                localStorage.setItem(`feedbackItemId: ${id}, upvoteStatus: `, '');

                setFeedbackItem({ ...feedbackItem, upvotes: feedbackItem.upvotes - 1 });
                updateFeedbackItem(id, { ...feedbackItem, upvotes: feedbackItem.upvotes - 1});
                
                setUserUpvoted('');
            }

            // * Item wasn't upvoted before, so we mark it as upvoted
            else {
                localStorage.setItem(`feedbackItemId: ${id}, upvoteStatus: `, 'upvoted');

                setUserUpvoted('upvoted');
                
                setFeedbackItem({ ...feedbackItem, upvotes: feedbackItem.upvotes + 1 });
                updateFeedbackItem(id, { ...feedbackItem, upvotes: feedbackItem.upvotes + 1 });
            }
        } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <section className="feedback-item"> 
            
            {
                showBadge && 

                <div className="feedback-item__badge">
                    <div className={`feedback-item__badge-icon feedback-item__badge-icon--${badgeColor}`}></div>
                    
                    <p className="feedback-item__badge-text">
                        { badgeText }
                    </p>
                </div>
            }
            
            <div className="feedback-content">
                <div className="feedback-content__text">
                    {
                        isLink ?

                        <>
                            <h2 className="screen-reader-only">{ title }</h2>

                            <Link 
                                to={ '/feedback-detail' } 
                                className="feedback-content__title" tabIndex="0"
                                onClick={ () => getSelectedFeedbackItemId(id) }
                            >
                                { title }
                            </Link>
                        </>

                        :

                        <h2 className="feedback-content__title">
                            { title }
                        </h2>
                    }

                    <p className="feedback-content__message">
                        { message }
                    </p>
                </div>

                <div className="feedback-content__upvotes">
                    <button 
                        type="button" 
                        className={`${userUpvoted ? 'feedback-content__upvotes-button--clicked' : 'feedback-content__upvotes-button'} button`}
                        onClick={ () => handleUpvoteClick() }
                    >
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6l4-4 4 4" stroke={ userUpvoted ? '#FFFFFF' : "#4661E6"} strokeWidth="2" fill="none" fillRule="evenodd"/>
                        </svg>

                        <span className="feedback-content__upvotes-total">
                            { totalUpvotes }
                        </span>
                    </button>
                </div>
                
                <div className="feedback-content__comments">
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/>
                    </svg>

                    <p className="feedback-content__comments-total">
                        { totalComments }
                    </p>
                </div>
                
                <div className="feedback-content__tag-container">
                    <div className="feedback-content__tag">
                        <p className="feedback-content__tag-text">
                            { tagCategory }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

FeedbackItem.defaultProps = { 
    showBadge: false,
    isLink: false
}

FeedbackItem.propTypes = {
    id: PropTypes.number,
    isLink: PropTypes.bool,
    showBadge: PropTypes.bool,
    badgeText: PropTypes.string,
    badgeColor: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    tagCategory: PropTypes.string,
    totalUpvotes: PropTypes.number,
    totalComments: PropTypes.number,
    getSelectedFeedbackItemId: PropTypes.func,
    updateFeedbackItem: PropTypes.func,
    feedbackItemObject: PropTypes.object
}

export default FeedbackItem;