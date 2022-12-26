import { PropTypes } from "prop-types";

import RoadmapCategoryItem from "./RoadmapCategoryItem";

function RoadmapCategory({ 
    title, 
    explanation, 
    totalItems, 
    color,
    feedbackItems,
    getSelectedFeedbackItemId,
    updateFeedbackItem 
}) {
    return ( 
        <section className="roadmap__category">
            <div className="roadmap__category-header">
                <h2 className="roadmap__category-title">
                    { title } <span className="roadmap__category-total">({ totalItems })</span>
                </h2>
                
                <p className="roadmap__category-explanation">
                    { explanation }
                </p>
            </div>

            {
                feedbackItems &&

                <ul className="roadmap__category-items">
                    {
                        feedbackItems.map(item => 
                            <RoadmapCategoryItem 
                                id={ item.id }
                                key={ item.id }
                                color={ color } 
                                badgeText={ title }
                                title={ item.title }
                                message={ item.description }
                                tagCategory={ item.category }
                                totalUpvotes={ item.upvotes }
                                totalComments={ item.comments ? item.comments.length : 0 }
                                getSelectedFeedbackItemId={ getSelectedFeedbackItemId }
                                updateFeedbackItem={ updateFeedbackItem }
                                feedbackItemObject={ item }
                            />
                        )
                    }
                </ul>
            }
        </section>
    );
}

RoadmapCategory.propTypes = {
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    feedbackItems: PropTypes.arrayOf(PropTypes.object),
    getSelectedFeedbackItemId: PropTypes.func,
    updateFeedbackItem: PropTypes.func
}

export default RoadmapCategory;