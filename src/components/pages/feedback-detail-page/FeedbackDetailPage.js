import { PropTypes } from "prop-types";

import GoBackHeader from "../../shared/GoBackHeader";
import FeedbackDetailMain from "./FeedbackDetailMain";

function FeedbackDetailPage({ sharedProps }) {
    return ( 
        <div className="feedback-detail container">
            <GoBackHeader 
                hasSecondaryButton={ true }
                secButtonText={ 'Edit Feedback' }
                secButtonClassName={ 'button--edit-feedback' }
            />

            <FeedbackDetailMain 
                feedbackItems={ sharedProps.feedbackItems } 
                feedbackItemDetailToShow={ sharedProps.feedbackItemDetailToShow }
            />
        </div>
    );
}

FeedbackDetailPage.propTypes = { sharedProps: PropTypes.object };

export default FeedbackDetailPage;