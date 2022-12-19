import FeedbackItem from "../../../shared/FeedbackItem";
import SuggestionsEmpty from "./SuggestionsEmpty";

function SuggestionsMain() {
    return ( 
        <main className="suggestions__main">
            <div className="suggestions__main-content container">
                {/* <SuggestionsEmpty /> */}
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
                <FeedbackItem />
            </div>
        </main>
    );
}

export default SuggestionsMain;