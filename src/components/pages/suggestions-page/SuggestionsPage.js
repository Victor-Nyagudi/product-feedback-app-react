import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps, getSelectedFeedbackItemId }) {
    const [feedbackItemsToShow, setFeedbackItemsToShow] = useState(sharedProps.feedbackItems);
    const [sortByCriteria, setSortByCriteria] = useState('Most Upvotes');

    function showTagFeedbackItems(tagName) {
        if (sharedProps.feedbackItems) {
            if (tagName !== 'All') {
                const tagFeedbackItems = sharedProps.feedbackItems.filter(item => item.category === tagName)

                setFeedbackItemsToShow(sortBy(tagFeedbackItems, sortByCriteria));
            }

            else
                setFeedbackItemsToShow(sortBy(sharedProps.feedbackItems, sortByCriteria));
        }
    }

    function sortFeedbackItems(sortByCriteria) {
        setSortByCriteria(sortByCriteria);
    }

    function sortBy(items, criteria) {
        const sortedByComments = 
            items.sort((item1, item2) => item2.comments.length - item1.comments.length);

        const sortedByUpvotes = 
            items.sort((item1, item2) => item2.upvotes - item1.upvotes);

        switch (criteria) {
            case 'Least Upvotes':
                return sortedByUpvotes.reverse();
            
            case 'Most Comments':
                return sortedByComments;
            
            case 'Least Comments':
                return sortedByComments.reverse();
        
            default:
                return sortedByUpvotes;
        }
    }

    useEffect(() => {
        // * Found this nice little way to re-render the page once data is fetched
        // * Sort by most upvotes by default

        setFeedbackItemsToShow(sortBy([...sharedProps.feedbackItems], sortByCriteria));
    }, [sharedProps.feedbackItems]);

    useEffect(() => {
        const sortedFeedbackItems = sortBy([...feedbackItemsToShow], sortByCriteria); 
        
        setFeedbackItemsToShow(sortedFeedbackItems);
    }, [sortByCriteria]);
    
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
                getSortByCriteria={ sortFeedbackItems }
                getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                sharedProps={ sharedProps }
            />
        </div>
    );
}

SuggestionsPage.propTypes = { 
    sharedProps: PropTypes.object, 
    getSelectedFeedbackItemId: PropTypes.func.isRequired
}

export default SuggestionsPage;