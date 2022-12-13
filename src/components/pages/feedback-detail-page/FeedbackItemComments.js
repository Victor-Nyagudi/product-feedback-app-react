import FeedbackItemComment from "./FeedbackItemComment";

function FeedbackItemComments() {
    return ( 
        <section className="feedback-detail__comments-container">
            <h2 className="feedback-detail__comments-title">
                <span className="feedback-detail__total-comments">
                    4
                </span>

                Comments
            </h2>

            <ul className="feedback-detail__comments">
                <FeedbackItemComment />
                <FeedbackItemComment />
            </ul>
        </section>
    );
}

export default FeedbackItemComments;