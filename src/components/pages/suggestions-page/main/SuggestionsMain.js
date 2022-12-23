import { PropTypes } from "prop-types";

import FeedbackItem from "../../../shared/FeedbackItem";
import SuggestionsEmpty from "./SuggestionsEmpty";

function SuggestionsMain({ feedbackItems, getSelectedFeedbackItemId }) {
    return ( 
        <main className="suggestions__main">
            <div className="suggestions__main-content container">
                {
                    feedbackItems.length > 0 ? 

                    feedbackItems.map(item => 
                        <FeedbackItem 
                            id={ item.id }
                            key={ item.id }
                            title={ item.title }
                            message={ item.description }
                            tagCategory={ item.category }
                            totalUpvotes={ item.upvotes }
                            totalComments={ item.comments ? item.comments.length : 0 }
                            isLink={ true }
                            getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                        />    
                    )

                    :

                    <SuggestionsEmpty /> 
                }
            </div>
        </main>
    );
}

SuggestionsMain.propTypes = {
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    getSelectedFeedbackItemId: PropTypes.func.isRequired
}

export default SuggestionsMain;