import FeedbackItemComments from "./FeedbackItemComments";
import FeedbackItem from "../../shared/FeedbackItem";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain() {
    return ( 
        <main className="feedback-detail__main">
            <FeedbackItem />
            <FeedbackItemComments />
            <FeedbackDetailAddComment />
        </main>
    );
}

export default FeedbackDetailMain;