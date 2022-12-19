import { PropTypes } from "prop-types";

import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent({ isMobileScreen }) {
    return ( 
        <div className="suggestions__content">
            <SuggestionsHeader totalSuggestions={ 0 } isMobileScreen={ isMobileScreen } />
            <SuggestionsMain />
        </div>
    );
}

SuggestionsContent.propTypes = { isMobileScreen: PropTypes.bool }

export default SuggestionsContent;