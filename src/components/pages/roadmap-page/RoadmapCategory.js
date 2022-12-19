import { PropTypes } from "prop-types";

import RoadmapCategoryItem from "./RoadmapCategoryItem";

function RoadmapCategory({ title, explanation, totalItems, color }) {
    return ( 
        <section className="roadmap__category">
            <div className="roadmap__category-header">
                <h2 className="roadmap__category-title">
                    { title } <span className="roadmap__category-total">({ totalItems })</span>
                </h2>
                
                <p className="roadmap__category-explanation">
                    { explanation }
                </p>
            </div>

            <ul className="roadmap__category-items">
                <RoadmapCategoryItem 
                    color={ color } 
                    badgeText={ title }
                />
                
                <RoadmapCategoryItem 
                    color={ color } 
                    badgeText={ title }
                />
            </ul>
        </section>
    );
}

RoadmapCategory.propTypes = {
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default RoadmapCategory;