import { PropTypes } from "prop-types";

import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsMain from "./SuggestionsMain";

function SuggestionsContent({ 
    isMobileScreen, 
    feedbackItems, 
    getSortByCriteria,
    getSelectedFeedbackItemId,
    sharedProps,
    mobileSideMenuOpen 
}) {
    return ( 
        <div className={ mobileSideMenuOpen ? "suggestions__content--dark" : "suggestions__content" }>
            <SuggestionsHeader 
                totalSuggestions={ 
                    feedbackItems ?

                    feedbackItems.filter(item => item.status === 'Suggestion').length 

                    : 0
                } 
                isMobileScreen={ isMobileScreen } 
                getSortByCriteria={ getSortByCriteria }
                sharedProps={ sharedProps }
            />
            
            <SuggestionsMain 
                feedbackItems={ feedbackItems } 
                getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                sharedProps={ sharedProps}
            />
        </div>
    );
}

SuggestionsContent.propTypes = { 
    isMobileScreen: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    getSortByCriteria: PropTypes.func.isRequired,
    getSelectedFeedbackItemId: PropTypes.func.isRequired,
    sharedProps: PropTypes.object,
    mobileSideMenuOpen: PropTypes.bool 
}

export default SuggestionsContent;