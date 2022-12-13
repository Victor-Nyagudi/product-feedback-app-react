import FeedbackMessageComments from "./FeedbackMessageComments";
import FeedbackMessage from "../../shared/FeedbackMessage";
import FeedbackDetailAddComment from "./FeedbackDetailAddComment";

function FeedbackDetailMain() {
    return ( 
        <main className="feedback-detail__main">
            <FeedbackMessage />
            <FeedbackMessageComments />
            <FeedbackDetailAddComment />
        </main>
    );
}

export default FeedbackDetailMain;