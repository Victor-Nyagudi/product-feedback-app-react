import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import FeedbackItemComments from "./FeedbackItemComments";
import FeedbackItem from "../../shared/FeedbackItem";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain({ feedbackItems, feedbackItemDetailToShow }) {
    const [feedbackItem, setFeedbackItem] = useState(null);
    
    useEffect(() => {
        if (feedbackItemDetailToShow)
            setFeedbackItem(feedbackItemDetailToShow);

        // else
        //     setFeedbackItem(feedbackItems[1])
    }, [feedbackItemDetailToShow]);

    /*
        * For some reason, React doesn't allow me to just check once, hence the
        * nested 'if' statement in the 'else' block. This works for now, but I'll
        * hunt around for a better solution in future if it exists.
        
        ! Without the second check, feedbackItem will be undefined and throw errors.
    */
    if (feedbackItem === null)
        return;
    
    else 
        if (feedbackItem !== undefined) {
            return ( 
                <main className="feedback-detail__main">
                    <FeedbackItem 
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
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    feedbackItemDetailToShow: PropTypes.object.isRequired 
};

export default FeedbackDetailMain;