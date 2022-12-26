import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import FeedbackItemComments from "./FeedbackItemComments";
import FeedbackItem from "../../shared/FeedbackItem";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain({ 
    feedbackItemDetailToShow,
    getFeedbackItem 
}) {
    const [feedbackItem, setFeedbackItem] = useState(null);
    
    useEffect(() => {
        if (feedbackItemDetailToShow) {
            setFeedbackItem(feedbackItemDetailToShow);

            try {
                localStorage.setItem('feedbackItemDetailToShowId', feedbackItemDetailToShow.id);
            } catch (error) {
                console.error(error);
            }
        }

        /*
            ! Navigating straight to FeedbackDetailPage via the url will throw an
            ! error because of this 'else' statement
        */  
        else
            getFeedbackItem(localStorage.getItem('feedbackItemDetailToShowId'));
    }, [feedbackItemDetailToShow]);

    /*
        * For some reason, React doesn't allow me to just check once, hence the
        * nested 'if' statement in the 'else' block. This works for now, but I'll
        * hunt around for a better solution in future if it exists.
        
        ! Without the second check, feedbackItem will be undefined and throw errors.
    */
    if (feedbackItem === null) {
        return;
    }
    
    else 
        if (feedbackItem !== undefined) {
            return ( 
                <main className="feedback-detail__main">
                    <FeedbackItem 
                        id={ feedbackItem.id }
                        title={ feedbackItem.title }
                        message={ feedbackItem.description }
                        tagCategory={ feedbackItem.category }
                        totalUpvotes={ feedbackItem.upvotes }
                        totalComments={ feedbackItem.comments && feedbackItem.comments.length }
                    />
    
                    {
                        feedbackItem.comments.length > 0 &&
    
                        <FeedbackItemComments comments={ feedbackItem.comments } />
                    }
    
                    <FeedbackDetailAddComment />
                </main>
            );
        }
}

FeedbackDetailMain.propTypes = { 
    feedbackItemDetailToShow: PropTypes.object.isRequired,
    getFeedbackItem: PropTypes.func 
};

export default FeedbackDetailMain;