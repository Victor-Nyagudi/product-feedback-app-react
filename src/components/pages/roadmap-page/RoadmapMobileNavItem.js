function RoadmapMobileNavItem({ text, totalFeedbackItems, isActive = false}) {
    return ( 
        <li className={ isActive ? 'roadmap__mobile-nav-item--active' : 'roadmap__mobile-nav-item' }>
            <button className="roadmap__mobile-nav-button button">
                { text } <span className="roadmap__total-feedback-items">({ totalFeedbackItems })</span>
            </button>
        </li>
    );
}

export default RoadmapMobileNavItem;