import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    const [feedbackItemsToShow, setFeedbackItemsToShow] = useState(sharedProps.feedbackItems);

    function showTagFeedbackItems(tagName) {
        if (sharedProps.feedbackItems) {
            if (tagName !== 'All') {
                const tagFeedbackItems = sharedProps.feedbackItems.filter(item => item.category === tagName)
                
                setFeedbackItemsToShow(tagFeedbackItems);
            }

            else
                setFeedbackItemsToShow(sharedProps.feedbackItems);
        }
    }

    useEffect(() => {
        // * Found this nice little way to re-render the page once data is fetched
        setFeedbackItemsToShow(sharedProps.feedbackItems);
    }, [sharedProps.feedbackItems]);
    
    return ( 
        <div className="suggestions">
            {
                sharedProps.isMobileScreen 

                ? <AppInfo isMobileScreen={ sharedProps.isMobileScreen } />

                : <SuggestionsAside 
                    feedbackItems={ sharedProps.feedbackItems }
                    getActiveTag={ showTagFeedbackItems }
                    /> 
            }

            <SuggestionsContent 
                isMobileScreen={ sharedProps.isMobileScreen }
                feedbackItems={ feedbackItemsToShow }
            />
        </div>
    );
}

SuggestionsPage.propTypes = { sharedProps: PropTypes.object }

export default SuggestionsPage;