import RoadmapCategory from "./RoadmapCategory";
import RoadmapMobileNavbar from "./RoadmapMobileNavbar";

function RoadmapMain({ isMobileScreen }) {
    return ( 
        <main className="roadmap__main container">
            <RoadmapCategory 
                title={ 'Planned' }
                explanation={ 'Ideas prioritized for research' }
                totalItems={ '2' }
                color={ 'orange' }
            />

            <RoadmapCategory 
                title={ 'In Progress' }
                explanation={ 'Currently being developed' }
                totalItems={ '3' }
                color={ 'purple' }
            />

            <RoadmapCategory 
                title={ 'Planned' }
                explanation={ 'Released features' }
                totalItems={ '1' }
                color={ 'blue' }
            />
        </main>
     );
}

export default RoadmapMain;