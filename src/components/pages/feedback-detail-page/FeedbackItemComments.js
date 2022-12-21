import { PropTypes } from "prop-types";

import FeedbackItemComment from "./FeedbackItemComment";

function FeedbackItemComments({ comments }) {
    return ( 
        <section className="feedback-detail__comments-container">
            <h2 className="feedback-detail__comments-title">
                <span className="feedback-detail__total-comments">
                    { comments.length }
                </span> Comments
            </h2>

            <ul className="feedback-detail__comments">
                {
                    comments.map(comment => 
                        <FeedbackItemComment 
                            key={ comment.id }
                            commentText={ comment.content }
                            commenter={ comment.user }
                        />
                    )
                }
                {/* <FeedbackItemComment /> */}
            </ul>
        </section>
    );
}

FeedbackItemComments.propTypes = { 
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackItemComments;