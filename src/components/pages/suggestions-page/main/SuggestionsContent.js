import { PropTypes } from "prop-types";

import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent({ isMobileScreen, feedbackItems, getSortByCriteria }) {
    return ( 
        <div className="suggestions__content">
            <SuggestionsHeader 
                totalSuggestions={ 
                    feedbackItems ?

                    feedbackItems.filter(item => item.status === 'suggestion').length 

                    : 0
                } 
                isMobileScreen={ isMobileScreen } 
                getSortByCriteria={ getSortByCriteria }
            />
            
            <SuggestionsMain feedbackItems={ feedbackItems } />
        </div>
    );
}

SuggestionsContent.propTypes = { 
    isMobileScreen: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    getSortByCriteria: PropTypes.func.isRequired 
}

export default SuggestionsContent;