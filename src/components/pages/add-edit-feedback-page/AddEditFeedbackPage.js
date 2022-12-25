import { PropTypes } from "prop-types";

import GoBackHeader from "../../shared/GoBackHeader";
import AddEditFeedbackMain from "./AddEditFeedbackMain";

function AddEditFeedbackPage({ sharedProps }) {
    return ( 
        <div className="add-edit-feedback container">
            <GoBackHeader />
            <AddEditFeedbackMain 
                feedbackItemFromDb={ sharedProps.dbFeedbackItemToShow }
                isEditing={ sharedProps.isEditing } 
                feedbackItems={ sharedProps.dbFeedbackItems }
                addFeedbackItem={ sharedProps.addDbFeedbackItem }
                deleteFeedbackItem={ sharedProps.deleteDbFeedbackItem }
                updateFeedbackItem={ sharedProps.updateDbFeedbackItem }
            />
        </div>
    );
}

AddEditFeedbackPage.propTypes = { sharedProps: PropTypes.object }

export default AddEditFeedbackPage;