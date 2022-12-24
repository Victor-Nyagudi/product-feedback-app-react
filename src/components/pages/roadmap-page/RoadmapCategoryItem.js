import { PropTypes } from "prop-types";

import FeedbackItem from "../../shared/FeedbackItem";

function RoadmapCategoryItem({ 
    id,
    color, 
    badgeText,
    title,
    message,
    tagCategory,
    totalUpvotes,
    totalComments,
    getSelectedFeedbackItemId 
}) {
    return ( 
        <li className={`roadmap__category-item roadmap__category-item--${color}`}>
            <FeedbackItem 
                id={ id }
                showBadge={ true } 
                badgeText={ badgeText }
                badgeColor={ color }
                title={ title }
                message={ message }
                tagCategory={ tagCategory }
                totalUpvotes={ totalUpvotes }
                totalComments={ totalComments }
                isLink={ true }
                getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
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
    totalComments: PropTypes.number,
    getSelectedFeedbackItemId: PropTypes.func,
    id: PropTypes.number
}

export default RoadmapCategoryItem;