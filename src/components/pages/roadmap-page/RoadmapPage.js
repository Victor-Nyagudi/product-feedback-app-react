import RoadmapHeader from "./RoadmapHeader";
import RoadmapMain from "./RoadmapMain";

function RoadMapPage({ sharedProps }) {
    return ( 
        <div className="roadmap">
            <RoadmapHeader />
            <RoadmapMain isMobileScreen={ sharedProps.isMobileScreen } />
        </div>
    );
}

export default RoadMapPage;