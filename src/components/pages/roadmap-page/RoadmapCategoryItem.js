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

export default RoadmapCategoryItem;