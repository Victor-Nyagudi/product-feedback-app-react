import React from "react";

import AddEditFeedbackPage from "../../../../components/pages/add-edit-feedback-page/AddEditFeedbackPage";

import * as AddEditFeedbackMain from "./AddEditFeedbackMain.stories";

export default {
    title: "App/Pages/AddEditFeedback/AddEditFeedbackPage",
    component: AddEditFeedbackPage,
}

const Template = (args) => <AddEditFeedbackPage {...args} />

export const AddFeedback = Template.bind({});
export const EditFeedback = Template.bind({});

AddFeedback.args = {
    sharedProps: {
        isEditing: AddEditFeedbackMain.AddFeedback.args.isEditing,
        dbFeedbackItems: AddEditFeedbackMain.AddFeedback.args.feedbackItems,
        dbFeedbackItemToShow: AddEditFeedbackMain.AddFeedback.args.feedbackItemFromDb,
        addDbFeedbackItem: () => { },
        updateDbFeedbackItem: () => { },
        deleteDbFeedbackItem: () => { }
    }
}

EditFeedback.args = {
    sharedProps: {
        isEditing: AddEditFeedbackMain.EditFeedback.args.isEditing,
        dbFeedbackItems: AddEditFeedbackMain.EditFeedback.args.feedbackItems,
        dbFeedbackItemToShow: AddEditFeedbackMain.EditFeedback.args.feedbackItemFromDb,
        addDbFeedbackItem: () => { },
        updateDbFeedbackItem: () => { },
        deleteDbFeedbackItem: () => { }
    }
}

AddFeedback.play = AddEditFeedbackMain.AddFeedback.play;
EditFeedback.play = AddEditFeedbackMain.EditFeedback.play;