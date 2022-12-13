import GoBackHeader from "../../shared/GoBackHeader";
import FeedbackDetailMain from "./FeedbackDetailMain";

function FeedbackDetailPage() {
    return ( 
        <div className="feedback-detail">
            <GoBackHeader 
                hasSecondaryButton={ true }
                secButtonText={ 'Edit Feedback' }
                secButtonClassName={ 'button--edit-feedback' }
            />

            <FeedbackDetailMain />
        </div>
    );
}

export default FeedbackDetailPage;