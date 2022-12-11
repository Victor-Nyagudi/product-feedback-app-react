import RoadmapInfoCategory from "./RoadmapInfoCategory";

function RoadmapInfo() {
    return ( 
        <section className="roadmap-info">
            <div className="roadmap-info__header">
                <h2 className="roadmap-info__title">
                    Roadmap
                </h2>

                <div className="roadmap-info__link-container">
                    <a href="#" className="roadmap-info__link">
                        View
                    </a>
                </div>
            </div>

            <ul className="roadmap-info__categories">
                <RoadmapInfoCategory 
                    category={ 'Planned' } 
                    quantity={ 0 } 
                    iconColor={ 'orange' }
                />
                
                <RoadmapInfoCategory 
                    category={ 'In Progress' } 
                    quantity={ 0 } 
                    iconColor={ 'purple' }
                />
                
                <RoadmapInfoCategory 
                    category={ 'Live' } 
                    quantity={ 0 } 
                    iconColor={ 'light-blue' }
                />
            </ul>
        </section>
    );
}

export default RoadmapInfo;