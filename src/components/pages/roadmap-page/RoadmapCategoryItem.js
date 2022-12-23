import { PropTypes } from "prop-types";

import FeedbackItem from "../../shared/FeedbackItem";

function RoadmapCategoryItem({ 
    color, 
    badgeText,
    title,
    message,
    tagCategory,
    totalUpvotes,
    totalComments 
}) {
    return ( 
        <li className={`roadmap__category-item roadmap__category-item--${color}`}>
            <FeedbackItem 
                showBadge={ true } 
                badgeText={ badgeText }
                badgeColor={ color }
                title={ title }
                message={ message }
                tagCategory={ tagCategory }
                totalUpvotes={ totalUpvotes }
                totalComments={ totalComments }
                isLink={ true }
            />
        </li>
    );
}

RoadmapCategoryItem.propTypes = {
    color: PropTypes.string.isRequired,
    badgeText: PropTypes.string.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    category: PropTypes.string,
    totalUpvotes: PropTypes.number,
    totalComments: PropTypes.number
}

export default RoadmapCategoryItem;