import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import MobileNavigation from "../../shared/MobileNavigation";
import SuggestionsAside from "./aside/SuggestionsAside";
import SuggestionsContent from "./main/SuggestionsContent";

function SuggestionsPage({ sharedProps }) {
    const [feedbackItemsToShow, setFeedbackItemsToShow] = useState(sharedProps.dbFeedbackItems);
    const [sortByCriteria, setSortByCriteria] = useState('Most Upvotes');

    const [activeTagCategory, setActiveTagCategory] = useState(null);

    const [mobileSideMenuOpen, setMobileSideMenuOpen] = useState(false);

    function showHideSideMenu(hamburgerButtonIsVisible) {
        if (hamburgerButtonIsVisible)
            setMobileSideMenuOpen(true);

        else 
            setMobileSideMenuOpen(false);
    }

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
        const sortedByUpvotes = 
            items.sort((item1, item2) => item2.upvotes - item1.upvotes);

        switch (criteria) {
            case 'Least Upvotes':
                return sortedByUpvotes.reverse();
            
            /*
                * For sorting by deep properties, not storing sorted items in a variable works.
                * i.e. sorting items in the return statement.
                * Storing them then returning the variable reversed doesn't work (unlike for upvotes)
            */ 
            case 'Most Comments': 
                return items.sort((item1, item2) => item2.comments.length - item1.comments.length);
            
            case 'Least Comments':
                return items.sort((item1, item2) => item2.comments.length - item1.comments.length).reverse();
        
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
        <div className={ mobileSideMenuOpen ? "suggestions--scroll-lock" : "suggestions"}>
            {
                sharedProps.isMobileScreen ?

                <MobileNavigation 
                    isMobileScreen={ sharedProps.isMobileScreen }
                    showHideSideMenu={ showHideSideMenu }
                    getActiveTag={ showTagFeedbackItems }
                    feedbackItems={ sharedProps.dbFeedbackItems }
                    mobileSideMenuOpen={ mobileSideMenuOpen }
                />

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
                mobileSideMenuOpen={ mobileSideMenuOpen }
            />
        </div>
    );
}

SuggestionsPage.propTypes = { 
    sharedProps: PropTypes.object
}

export default SuggestionsPage;