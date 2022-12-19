import { PropTypes } from "prop-types";

function RoadmapMobileNavItem({ text, totalFeedbackItems, isActive }) {
    return ( 
        <li className={ isActive ? 'roadmap__mobile-nav-item--active' : 'roadmap__mobile-nav-item' }>
            <button className="roadmap__mobile-nav-button button">
                { text } <span className="roadmap__total-feedback-items">({ totalFeedbackItems })</span>
            </button>
        </li>
    );
}

RoadmapMobileNavItem.defaultProps = { isActive: false }

RoadmapMobileNavItem.propTypes = {
    text: PropTypes.string.isRequired,
    totalFeedbackItems: PropTypes.number.isRequired,
    isActive: PropTypes.bool
}

export default RoadmapMobileNavItem;