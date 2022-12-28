import { PropTypes } from "prop-types";

import FeedbackItemComment from "./FeedbackItemComment";

function FeedbackItemComments({ comments }) {
    const headingText = comments.length > 1 ? 'Comments' : 'Comment';

    return ( 
        <section className="feedback-detail__comments-container">
            <h2 className="feedback-detail__comments-title">
                <span className="feedback-detail__total-comments">
                    { comments.length }
                </span> { headingText }
            </h2>

            <ul className="feedback-detail__comments">
                {
                    comments.map(comment => 
                        <FeedbackItemComment 
                            key={ comment.id }
                            commentText={ comment.content }
                            commenter={ comment.user }
                            replies={ comment.replies && comment.replies }
                            commentId={ comment.id }
                        />
                    )
                }
            </ul>
        </section>
    );
}

FeedbackItemComments.propTypes = { 
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackItemComments;