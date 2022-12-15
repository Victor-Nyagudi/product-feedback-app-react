import RoadmapMobileNavItem from "./RoadmapMobileNavItem";

function RoadmapMobileNavbar() {
    return ( 
      <ul className="roadmap__mobile-navbar">
        <RoadmapMobileNavItem 
          text={ 'Planned' }
          totalFeedbackItems={ '2' }
        />
        
        <RoadmapMobileNavItem 
          text={ 'In Progress' }
          totalFeedbackItems={ '3' }
        />
        
        <RoadmapMobileNavItem 
          text={ 'Live' }
          totalFeedbackItems={ '1' }
        />
      </ul>  
    );
}

export default RoadmapMobileNavbar;