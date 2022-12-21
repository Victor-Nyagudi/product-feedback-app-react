import { PropTypes } from "prop-types";

import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent({ isMobileScreen, feedbackItems }) {
    return ( 
        <div className="suggestions__content">
            <SuggestionsHeader totalSuggestions={ 0 } isMobileScreen={ isMobileScreen } />
            <SuggestionsMain feedbackItems={ feedbackItems } />
        </div>
    );
}

SuggestionsContent.propTypes = { 
    isMobileScreen: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object) 
}

export default SuggestionsContent;