import FeedbackMessageComments from "./FeedbackMessageComments";
import FeedbackItem from "../../shared/FeedbackItem";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain() {
    return ( 
        <main className="feedback-detail__main">
            <FeedbackItem />
            <FeedbackMessageComments />
            <FeedbackDetailAddComment />
        </main>
    );
}

export default FeedbackDetailMain;