import FeedbackMessageComment from "./FeedbackMessageComment";

function FeedbackMessageComments() {
    return ( 
        <section className="feedback-detail__comments-container">
            <h2 className="feedback-detail__comments-title">
                <span className="feedback-detail__total-comments">
                    4
                </span>

                Comments
            </h2>

            <ul className="feedback-detail__comments">
                <FeedbackMessageComment />
                <FeedbackMessageComment />
            </ul>
        </section>
    );
}

export default FeedbackMessageComments;