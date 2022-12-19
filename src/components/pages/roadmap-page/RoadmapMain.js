import RoadmapCategory from "./RoadmapCategory";

function RoadmapMain() {
    return ( 
        <main className="roadmap__main container">
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
        </main>
     );
}

export default RoadmapMain;