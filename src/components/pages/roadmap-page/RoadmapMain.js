import { PropTypes } from "prop-types";

import RoadmapCategory from "./RoadmapCategory";

function RoadmapMain({ activeMobileNavItem, isSmallerThan700px }) {
    /*
        * Using a simple variable instead of state because doing
        * so throws an error of too many re-renders. This is the
        * default category to show since it's selected by default in the SCSS
    */
    let categoryInfo = {
        title: 'In Progress',
        explanation: 'Features currently being developed',
        totalItems: 3,
        color: 'purple'
    };

    /*  
        * Show different category depending on mobile nav item clicked.
        * activeMobileNavItem is null on page load since no button has been 
        * clicked yet, hence the check
    */

    if (activeMobileNavItem) {
        if (activeMobileNavItem.text === 'Planned') {
            categoryInfo = { 
                title: 'Planned',
                explanation: 'Ideas prioritized for research',
                totalItems: 2,
                color: 'orange'
            };
        }
    
        else if (activeMobileNavItem.text === 'In Progress') {
            categoryInfo = { 
                title: 'In Progress',
                explanation: 'Features currently being developed',
                totalItems: 3,
                color: 'purple'
            }
        }
    
        else {
            categoryInfo = { 
                title: 'Live',
                explanation: 'Released features',
                totalItems: 1,
                color: 'light-blue'
            }
        }
    }

    return ( 
        <main className="roadmap__main container">
            {
                isSmallerThan700px ? 

                <RoadmapCategory 
                    title={ categoryInfo.title }
                    explanation={ categoryInfo.explanation }
                    totalItems={ categoryInfo.totalItems }
                    color={ categoryInfo.color }
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