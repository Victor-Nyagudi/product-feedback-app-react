import { PropTypes } from "prop-types";

import FeedbackItemComments from "./FeedbackItemComments";
import FeedbackItem from "../../shared/FeedbackItem";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain({ feedbackItems }) {
    const feedbackItem = feedbackItems[1] && feedbackItems[1];

    return ( 
        <main className="feedback-detail__main">
            {
                feedbackItem &&

                <FeedbackItem 
                    title={ feedbackItem.title }
                    message={ feedbackItem.description }
                    tagCategory={ feedbackItem.category }
                    totalUpvotes={ feedbackItem.upvotes }
                    totalComments={ feedbackItem.comments && feedbackItem.comments.length }
                />
            }
            
            <FeedbackItemComments />
            <FeedbackDetailAddComment />
        </main>
    );
}

FeedbackDetailMain.propTypes = { feedbackItems: PropTypes.arrayOf(PropTypes.object) };

export default FeedbackDetailMain;