import { PropTypes } from "prop-types";

function RoadmapMobileNavItem({ 
    text, 
    totalFeedbackItems, 
    isActive, 
    setActive,
    index 
}) {
    return ( 
        <li className={ isActive ? 'roadmap__mobile-nav-item--active' : 'roadmap__mobile-nav-item' }>
            <button 
                className="roadmap__mobile-nav-button button"
                onClick={ () => setActive(index) }
            >
                { text } <span className="roadmap__total-feedback-items">({ totalFeedbackItems })</span>
            </button>
        </li>
    );
}

RoadmapMobileNavItem.defaultProps = { isActive: false }

RoadmapMobileNavItem.propTypes = {
    text: PropTypes.string.isRequired,
    totalFeedbackItems: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
    index: PropTypes.number
}

export default RoadmapMobileNavItem;