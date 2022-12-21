import { PropTypes } from "prop-types";

import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent({ isMobileScreen, feedbackItems }) {
    return ( 
        <div className="suggestions__content">
            <SuggestionsHeader 
                totalSuggestions={ feedbackItems.filter(item => item.status === 'suggestion').length } 
                isMobileScreen={ isMobileScreen } 
            />
            
            <SuggestionsMain feedbackItems={ feedbackItems } />
        </div>
    );
}

SuggestionsContent.propTypes = { 
    isMobileScreen: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object) 
}

export default SuggestionsContent;