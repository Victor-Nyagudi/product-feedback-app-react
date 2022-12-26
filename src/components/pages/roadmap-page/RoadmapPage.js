import { PropTypes } from "prop-types";
import React, { useState } from 'react';

import RoadmapHeader from "./RoadmapHeader";
import RoadmapMain from "./RoadmapMain";
import RoadmapMobileNavbar from "./RoadmapMobileNavbar";

function RoadMapPage({ sharedProps }) {
    const [activeMobileNavItem, setActiveMobileNavItem] = useState(null);

    function getActiveMobileNavItem(navItem) {
        setActiveMobileNavItem(navItem);
    }

    return ( 
        <div className="roadmap">
            <RoadmapHeader sharedProps={ sharedProps } />

            {
                sharedProps.isSmallerThan700px &&
                
                <RoadmapMobileNavbar 
                    getActiveMobileNavItem={ getActiveMobileNavItem }
                    feedbackItems={ sharedProps.dbFeedbackItems }
                />
            }

            <RoadmapMain 
                isSmallerThan700px={ sharedProps.isSmallerThan700px } 
                activeMobileNavItem={ activeMobileNavItem }
                feedbackItems={ sharedProps.dbFeedbackItems }
                getSelectedFeedbackItemId={ sharedProps.showFeedbackItemDetail }
                updateFeedbackItem={ sharedProps.updateDbFeedbackItem }
            />
        </div>
    );
}

RoadMapPage.propTypes = { sharedProps: PropTypes.object }

export default RoadMapPage;