import React, { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";

import RoadmapMobileNavItem from "./RoadmapMobileNavItem";

function RoadmapMobileNavbar({ getActiveMobileNavItem, feedbackItems }) {
  const categoryNames = {
    planned: 'Planned',
    inProgress: 'In Progress',
    live: 'Live'
  };

  function getTotalItems(category) {
    if (feedbackItems)
      return feedbackItems.filter(item => item.status === category).length;
  }

  //#region Code to toggle active navbar item
  /*
    * Now, where I have this kind of implementation before, hmmm..? :)
    * Hint: DropdownMenu.js
  */
  const [mobileNavItems, setMobileNavItems] = useState([
    { 
      text: categoryNames.planned, 
      totalFeedbackItems: getTotalItems(categoryNames.planned), 
      isActive: false 
    },
    { 
      text: categoryNames.inProgress, 
      totalFeedbackItems: getTotalItems(categoryNames.inProgress), 
      isActive: true 
    },
    { 
      text: categoryNames.live, 
      totalFeedbackItems: getTotalItems(categoryNames.live), 
      isActive: false 
    }
  ]);

  function changeActiveNavItem(index) {
    const updatedNavItems = mobileNavItems.map((item, i) => 
      {
        if (i === index) {
          return { 
            text: item.text, 
            totalFeedbackItems: item.totalFeedbackItems,
            isActive: true 
          };
        }

        else {
          return { 
            text: item.text,
            totalFeedbackItems: item.totalFeedbackItems,
            isActive: false
          }
        }
      }
    )

    getActiveMobileNavItem(updatedNavItems.filter(item => item.isActive === true)[0]);
    
    setMobileNavItems(updatedNavItems);
  }
  //#endregion

  return ( 
    <nav className="roadmap__mobile-navbar">
      <ul className="roadmap__mobile-nav-items container">
        {
          mobileNavItems.map((item, index) => 
            <RoadmapMobileNavItem 
              key={ index }
              text={ item.text }
              isActive={ item.isActive }
              index={ index }
              totalFeedbackItems={ item.totalFeedbackItems }
              setActive={ changeActiveNavItem }
            />
          )
        }
      </ul>  
    </nav>
    
  );
}

RoadmapMobileNavbar.propTypes = { 
  getActiveMobileNavItem: PropTypes.func,
  feedbackItems: PropTypes.arrayOf(PropTypes.object).isRequired 
}

export default RoadmapMobileNavbar;