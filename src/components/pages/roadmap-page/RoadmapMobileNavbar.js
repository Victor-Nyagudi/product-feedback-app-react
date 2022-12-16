import RoadmapMobileNavItem from "./RoadmapMobileNavItem";

function RoadmapMobileNavbar() {
    return ( 
      <nav className="roadmap__mobile-navbar">
        <ul className="roadmap__mobile-nav-items container">
          <RoadmapMobileNavItem 
            text={ 'Planned' }
            totalFeedbackItems={ '2' }
          />
          
          <RoadmapMobileNavItem 
            text={ 'In Progress' }
            totalFeedbackItems={ '3' }
            isActive={ true }
          />
          
          <RoadmapMobileNavItem 
            text={ 'Live' }
            totalFeedbackItems={ '1' }
          />
        </ul>  
      </nav>
      
    );
}

export default RoadmapMobileNavbar;