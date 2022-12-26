import React, { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";

import RoadmapMobileNavItem from "./RoadmapMobileNavItem";

function RoadmapMobileNavbar({ getActiveMobileNavItem, feedbackItems }) {
  const categoryName = {
    planned: 'Planned',
    inProgress: 'In Progress',
    live: 'Live'
  };

  function getTotalItems(categoryName) {
    if (feedbackItems.length > 0) {
      return feedbackItems.filter(item => item.status === categoryName).length;
    }
    
      else {
        console.warn('No feedback items to show. If feedback items retrieved eventually, ignore this warning.');
        return 0;
      }
  }

  //#region Code to toggle active navbar item
  /*
    * Now, where I have this kind of implementation before, hmmm..? :)
    * Hint: DropdownMenu.js
  */
  const [mobileNavItems, setMobileNavItems] = useState([
    { 
      text: categoryName.planned, 
      totalFeedbackItems: getTotalItems(categoryName.planned), 
      isActive: false 
    },
    { 
      text: categoryName.inProgress, 
      totalFeedbackItems: getTotalItems(categoryName.inProgress), 
      isActive: true 
    },
    { 
      text: categoryName.live, 
      totalFeedbackItems: getTotalItems(categoryName.live), 
      isActive: false 
    }
  ]);

  useEffect(() => {
    setMobileNavItems([
      { 
        text: categoryName.planned, 
        totalFeedbackItems: getTotalItems(categoryName.planned), 
        isActive: false 
      },
      { 
        text: categoryName.inProgress, 
        totalFeedbackItems: getTotalItems(categoryName.inProgress), 
        isActive: true 
      },
      { 
        text: categoryName.live, 
        totalFeedbackItems: getTotalItems(categoryName.live), 
        isActive: false 
      }
    ])
  }, [feedbackItems]); // * <- I kept passing mobileNavItems here causing infinite rendering loop


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