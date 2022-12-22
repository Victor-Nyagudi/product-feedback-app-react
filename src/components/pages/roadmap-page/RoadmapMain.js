import { PropTypes } from "prop-types";

import RoadmapCategory from "./RoadmapCategory";

function RoadmapMain({ activeMobileNavItem, isSmallerThan700px }) {
    const categoryNames = {
        planned: 'Planned',
        inProgress: 'In Progress',
        live: 'Live'
    }

    /*
        * Using a simple variable, categoryInfo, instead of state because doing
        * so throws an error of too many re-renders. categoryInfo.inProgress is the
        * default category to show since it's selected by default in the SCSS
    */
    let categoryInfo = {
        planned: {
            title: categoryNames.planned,
            explanation: 'Ideas prioritized for research',
            totalItems: 2,
            color: 'orange'
        },
        inProgress: {
            title: categoryNames.inProgress,
            explanation: 'Features currently being developed',
            totalItems: 3,
            color: 'purple'
        },
        live: {
            title: categoryNames.live,
            explanation: 'Released features',
            totalItems: 1,
            color: 'light-blue'
        }
    };

    //#region Code to show different category depending on mobile nav item clicked
    /*  
        * Show different category depending on mobile nav item clicked.
        * activeMobileNavItem is null on page load since no button has been 
        * clicked yet, hence the check
    */

    let categoryInfoToShow = categoryInfo.inProgress;

    if (activeMobileNavItem) {
        if (activeMobileNavItem.text === categoryNames.planned) 
            categoryInfoToShow = categoryInfo.planned;
    
        else if (activeMobileNavItem.text === categoryNames.inProgress) 
            categoryInfoToShow = categoryInfo.inProgress;
    
        else 
            categoryInfoToShow = categoryInfo.live;
    }
    //#endregion

    return ( 
        <main className="roadmap__main container">
            {
                isSmallerThan700px ? 

                <RoadmapCategory 
                    title={ categoryInfoToShow.title }
                    explanation={ categoryInfoToShow.explanation }
                    totalItems={ categoryInfoToShow.totalItems }
                    color={ categoryInfoToShow.color }
                />                

                :
                <>
                    <RoadmapCategory 
                        title={ 'Planned' }
                        explanation={ 'Ideas prioritized for research' }
                        totalItems={ 2 }
                        color={ 'orange' }
                    />
        
                    <RoadmapCategory 
                        title={ 'In Progress' }
                        explanation={ 'Features currently being developed' }
                        totalItems={ 3 }
                        color={ 'purple' }
                    />
        
                    <RoadmapCategory 
                        title={ 'Live' }
                        explanation={ 'Released features' }
                        totalItems={ 1 }
                        color={ 'light-blue' }
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
    isSmallerThan700px: PropTypes.bool
};

export default RoadmapMain;