import FeedbackItem from "../../shared/FeedbackItem";

function RoadmapCategoryItem({ color }) {
    return ( 
        <li className={`roadmap__category-item roadmap__category-item--${color}`}>
            <FeedbackItem />
        </li>
    );
}

export default RoadmapCategoryItem;