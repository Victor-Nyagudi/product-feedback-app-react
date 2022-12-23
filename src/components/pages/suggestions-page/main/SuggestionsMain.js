import { PropTypes } from "prop-types";

import FeedbackItem from "../../../shared/FeedbackItem";
import SuggestionsEmpty from "./SuggestionsEmpty";

function SuggestionsMain({ feedbackItems }) {
    return ( 
        <main className="suggestions__main">
            <div className="suggestions__main-content container">
                {
                    feedbackItems ? 

                    feedbackItems.map(item => 
                        <FeedbackItem 
                            key={ item.id }
                            title={ item.title }
                            message={ item.description }
                            tagCategory={ item.category }
                            totalUpvotes={ item.upvotes }
                            totalComments={ item.comments ? item.comments.length : 0 }
                            isLink={ true }
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
    feedbackItems: PropTypes.arrayOf(PropTypes.object)
}

export default SuggestionsMain;