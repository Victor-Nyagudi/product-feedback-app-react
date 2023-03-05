import { PropTypes } from "prop-types";

function RoadmapInfoCategory({ category, quantity, iconColor }) {
    return ( 
        <li className="roadmap-info__category" aria-atomic="true">
            <div className="roadmap-info__detail-container">
                <div className={`roadmap-info__detail-icon ${iconColor}`}></div>
           
                <p className="roadmap-info__category-name">
                    { category }
                </p>
            </div>

            <div className="roadmap-info__quantity-container">
                <p className="roadmap-info__category-quantity" aria-live="polite">
                    { quantity }
                </p>                
            </div>
        </li>
    );
}

RoadmapInfoCategory.propTypes = {
    category: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    iconColor: PropTypes.oneOf([
        "orange",
        "purple",
        "light-blue"
    ])
}

export default RoadmapInfoCategory;