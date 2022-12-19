import { PropTypes } from "prop-types";

import FeedbackItem from "../../shared/FeedbackItem";

function RoadmapCategoryItem({ color, badgeText }) {
    return ( 
        <li className={`roadmap__category-item roadmap__category-item--${color}`}>
            <FeedbackItem 
                showBadge={ true } 
                badgeText={ badgeText }
                badgeColor={ color }
            />
        </li>
    );
}

RoadmapCategoryItem.propTypes = {
    color: PropTypes.string.isRequired,
    badgeText: PropTypes.string.isRequired
}

export default RoadmapCategoryItem;