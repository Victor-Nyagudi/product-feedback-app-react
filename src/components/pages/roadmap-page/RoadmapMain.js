import { PropTypes } from "prop-types";
import React, { useState, useEffect } from 'react';

import RoadmapCategory from "./RoadmapCategory";

function RoadmapMain({ 
    activeMobileNavItem, 
    isSmallerThan700px, 
    feedbackItems,
    getSelectedFeedbackItemId,
    updateFeedbackItem
}) {
    const categoryName = {
        planned: 'Planned',
        inProgress: 'In Progress',
        live: 'Live'
    }

    const [categoryInfo, setCategoryInfo] = useState({
        planned: {
            title: categoryName.planned,
            explanation: 'Ideas prioritized for research',
            totalItems: getTotalItems(categoryName.planned),
            color: 'orange'
        },
        inProgress: {
            title: categoryName.inProgress,
            explanation: 'Features currently being developed',
            totalItems: getTotalItems(categoryName.inProgress),
            color: 'purple'
        },
        live: {
            title: categoryName.live,
            explanation: 'Released features',
            totalItems: getTotalItems(categoryName.live),
            color: 'light-blue'
        }
    });

    useEffect(() => {
        setCategoryInfo({
            planned: {
                title: categoryName.planned,
                explanation: 'Ideas prioritized for research',
                totalItems: getTotalItems(categoryName.planned),
                color: 'orange'
            },
            inProgress: {
                title: categoryName.inProgress,
                explanation: 'Features currently being developed',
                totalItems: getTotalItems(categoryName.inProgress),
                color: 'purple'
            },
            live: {
                title: categoryName.live,
                explanation: 'Released features',
                totalItems: getTotalItems(categoryName.live),
                color: 'light-blue'
            }
        });
    }, [feedbackItems]);

    function getTotalItems(categoryName) {
        if (feedbackItems.length > 0) {
            return feedbackItems.filter(item => item.status === categoryName).length;
        }

        else {
            console.warn('No feedback items to show. If feedback items retrieved eventually, ignore this warning.');
            return 0;
        }
    }

    function getCategoryItems(categoryName) {
        if (feedbackItems.length > 0) {
            return feedbackItems.filter(item => item.status === categoryName);
        }

        else 
            console.warn('Feedback items not retrieved yet - RoadmapMain');
    }

    //#region Code to show different category depending on mobile nav item clicked
    /*  
        * Show different category depending on mobile nav item clicked.
        * activeMobileNavItem is null on page load since no button has been 
        * clicked yet, hence the check
    */

    let categoryInfoToShowMobile = categoryInfo.inProgress;

    if (activeMobileNavItem) {
        if (activeMobileNavItem.text === categoryName.planned) 
            categoryInfoToShowMobile = categoryInfo.planned;
    
        else if (activeMobileNavItem.text === categoryName.inProgress) 
            categoryInfoToShowMobile = categoryInfo.inProgress;
    
        else 
            categoryInfoToShowMobile = categoryInfo.live;
    }
    //#endregion

    return ( 
        <main className="roadmap__main container">
            {
                isSmallerThan700px ? 

                <RoadmapCategory 
                    title={ categoryInfoToShowMobile.title }
                    explanation={ categoryInfoToShowMobile.explanation }
                    totalItems={ categoryInfoToShowMobile.totalItems }
                    color={ categoryInfoToShowMobile.color }
                    feedbackItems={ getCategoryItems(categoryInfoToShowMobile.title) }
                    getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                    updateFeedbackItem={ updateFeedbackItem }
                />                

                :
                <>
                    <RoadmapCategory 
                        title={ categoryInfo.planned.title }
                        explanation={ categoryInfo.planned.explanation }
                        totalItems={ categoryInfo.planned.totalItems }
                        color={ categoryInfo.planned.color }
                        feedbackItems={ getCategoryItems(categoryInfo.planned.title) }
                        getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                        updateFeedbackItem={ updateFeedbackItem }
                    />
        
                    <RoadmapCategory 
                        title={ categoryInfo.inProgress.title }
                        explanation={ categoryInfo.inProgress.explanation }
                        totalItems={ categoryInfo.inProgress.totalItems }
                        color={ categoryInfo.inProgress.color }
                        feedbackItems={ getCategoryItems(categoryInfo.inProgress.title) }
                        getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                        updateFeedbackItem={ updateFeedbackItem }
                    />
        
                    <RoadmapCategory 
                        title={ categoryInfo.live.title }
                        explanation={ categoryInfo.live.explanation }
                        totalItems={ categoryInfo.live.totalItems }
                        color={ categoryInfo.live.color }
                        feedbackItems={ getCategoryItems(categoryInfo.live.title) }
                        getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                        updateFeedbackItem={ updateFeedbackItem }
                    />
                </>
            }
        </main>
     );
}

RoadmapMain.defaultProps = {
    activeMobileNavItem: {
        text: 'In Progress',
        totalFeedbackItems: 3,
        isActive: true
    }
};

RoadmapMain.propTypes = {
    activeMobileNavItem: PropTypes.object,
    isSmallerThan700px: PropTypes.bool,
    feedbackItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSelectedFeedbackItemId: PropTypes.func,
    updateFeedbackItem: PropTypes.func
};

export default RoadmapMain;