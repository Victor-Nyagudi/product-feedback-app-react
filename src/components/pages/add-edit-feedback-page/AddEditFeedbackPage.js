import GoBackHeader from "../../shared/GoBackHeader";
import AddEditFeedbackMain from "./AddEditFeedbackMain";

function AddEditFeedbackPage() {
    return ( 
        <div className="add-edit-feedback">
            <GoBackHeader />
            <AddEditFeedbackMain title={ 'Add a dark theme option' } />
        </div>
    );
}

export default AddEditFeedbackPage;