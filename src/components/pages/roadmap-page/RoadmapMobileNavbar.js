import React, { useState } from 'react';

import RoadmapMobileNavItem from "./RoadmapMobileNavItem";

function RoadmapMobileNavbar() {
  /*
    * Now, where I have this kind of implementation before, hmmm..? :)
    * Hint: DropdownMenu.js
  */
  const [mobileNavItems, setMobileNavItems] = useState([
    { text: 'Planned', totalFeedbackItems: 2, isActive: false },
    { text: 'In Progress', totalFeedbackItems: 3, isActive: true },
    { text: 'Live', totalFeedbackItems: 1, isActive: false }
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

    setMobileNavItems(updatedNavItems);
  }

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

export default RoadmapMobileNavbar;