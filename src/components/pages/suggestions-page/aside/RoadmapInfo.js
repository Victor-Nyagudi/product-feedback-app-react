import RoadmapInfoCategory from "./RoadmapInfoCategory";

function RoadmapInfo() {
    return ( 
        <section className="roadmap_info">
            <div className="roadmap-info__header">
                <h2 className="roadmap_info__title">
                    Roadmap
                </h2>

                <div className="roadmap-info__link-container">
                    <a href="#" className="roadmap-info__link">
                        View
                    </a>
                </div>
            </div>

            <ul className="roadmap-info__categories">
                <RoadmapInfoCategory category={ 'Planned' } quantity={ 0 } />
                <RoadmapInfoCategory category={ 'In Progress' } quantity={ 0 } />
                <RoadmapInfoCategory category={ 'Live' } quantity={ 0 } />
            </ul>
        </section>
    );
}

export default RoadmapInfo;