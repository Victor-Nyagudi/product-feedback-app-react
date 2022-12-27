import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import AppInfo from "./aside/AppInfo";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    const [feedbackItemsToShow, setFeedbackItemsToShow] = useState(sharedProps.dbFeedbackItems);
    const [sortByCriteria, setSortByCriteria] = useState('Most Upvotes');

    const [activeTagCategory, setActiveTagCategory] = useState(null);

    function showTagFeedbackItems(tagName) {
        if (sharedProps.dbFeedbackItems) {
            if (tagName !== 'All') {
                const tagFeedbackItems = sharedProps.dbFeedbackItems.filter(item => item.category === tagName)

                setFeedbackItemsToShow(sortBy(tagFeedbackItems, sortByCriteria));
                setActiveTagCategory(tagName);
            }

            else {
                setFeedbackItemsToShow(sortBy(sharedProps.dbFeedbackItems, sortByCriteria));
                setActiveTagCategory('All');
            }
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

        setFeedbackItemsToShow(sortBy([...sharedProps.dbFeedbackItems], sortByCriteria));

        // * If no tag is selected i.e. when page loads (activeTagCategory still null), show all the feedback items. 

        if (activeTagCategory)
            setFeedbackItemsToShow(sharedProps.dbFeedbackItems.filter(item => item.category === activeTagCategory));
    }, [sharedProps.dbFeedbackItems]);

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
                    feedbackItems={ sharedProps.dbFeedbackItems }
                    getActiveTag={ showTagFeedbackItems }
                    /> 
            }

            <SuggestionsContent 
                isMobileScreen={ sharedProps.isMobileScreen }
                feedbackItems={ feedbackItemsToShow }
                getSortByCriteria={ sortFeedbackItems }
                getSelectedFeedbackItemId={ sharedProps.showFeedbackItemDetail }
                sharedProps={ sharedProps }
            />
        </div>
    );
}

SuggestionsPage.propTypes = { 
    sharedProps: PropTypes.object
}

export default SuggestionsPage;