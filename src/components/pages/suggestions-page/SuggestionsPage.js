import { PropTypes } from "prop-types";

import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    return ( 
        <div className="suggestions">
            {
                sharedProps.isMobileScreen 

                ? <AppInfo isMobileScreen={ sharedProps.isMobileScreen } />

                : <SuggestionsAside feedbackItems={ sharedProps.feedbackItems }/> 
            }

            <SuggestionsContent 
                isMobileScreen={ sharedProps.isMobileScreen }
                feedbackItems={ sharedProps.feedbackItems }
            />
        </div>
    );
}

SuggestionsPage.propTypes = { sharedProps: PropTypes.object }

export default SuggestionsPage;