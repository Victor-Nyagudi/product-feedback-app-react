function RoadmapMobileNavItem({ text, totalFeedbackItems }) {
    return ( 
        <li className="roadmap__mobile-nav-item">
            <button className="roadmap__mobile-nav-button button">
                { text } <span className="roadmap__total-feedback-items">({ totalFeedbackItems })</span>
            </button>
        </li>
    );
}

export default RoadmapMobileNavItem;