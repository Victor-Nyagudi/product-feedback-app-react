import { PropTypes } from "prop-types";

import RoadmapInfoCategory from "./RoadmapInfoCategory";

function RoadmapInfo({ feedbackItems }) {
    const plannedCategoryName = 'Planned';
    const inProgressCategoryName = 'In Progress';
    const liveCategoryName = 'Live';

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
                    category={ plannedCategoryName } 
                    quantity={ feedbackItems.filter(item => item.status === plannedCategoryName).length } 
                    iconColor={ 'orange' }
                />
                
                <RoadmapInfoCategory 
                    category={ inProgressCategoryName } 
                    quantity={ feedbackItems.filter(item => item.status === inProgressCategoryName).length } 
                    iconColor={ 'purple' }
                />
                
                <RoadmapInfoCategory 
                    category={ liveCategoryName } 
                    quantity={ feedbackItems.filter(item => item.status === liveCategoryName).length } 
                    iconColor={ 'light-blue' }
                />
            </ul>
        </section>
    );
}

RoadmapInfo.propTypes = { feedbackItems: PropTypes.arrayOf(PropTypes.object) };

export default RoadmapInfo;