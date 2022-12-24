import { PropTypes } from "prop-types";

import GoBackHeader from "../../shared/GoBackHeader";
import AddEditFeedbackMain from "./AddEditFeedbackMain";

function AddEditFeedbackPage({ sharedProps }) {
    return ( 
        <div className="add-edit-feedback container">
            <GoBackHeader />
            <AddEditFeedbackMain 
                title={ sharedProps.feedbackItemDetailToShow ? sharedProps.feedbackItemDetailToShow.title : 'Test heading' } 
                isEditing={ sharedProps.isEditing } 
            />
        </div>
    );
}

AddEditFeedbackPage.propTypes = { sharedProps: PropTypes.object }

export default AddEditFeedbackPage;