import React from "react";

import AddEditFeedbackButton from "../../../../components/pages/add-edit-feedback-page/AddEditFeedbackButton";
import * as ButtonStories from "../../shared/Button.stories";

export default {
    title: "App/Pages/AddEditFeedback/AddEditFeedbackButton",
    component: AddEditFeedbackButton
}

const Template = (args) => <AddEditFeedbackButton {...args} />;

export const AddFeedbackDesktop = Template.bind({});
export const AddFeedbackMobile = Template.bind({});

export const CancelDesktop = Template.bind({});
export const CancelMobile = Template.bind({});

export const DeleteDesktop = Template.bind({});
export const DeleteMobile = Template.bind({});

AddFeedbackDesktop.args = ButtonStories.AddFeedbackSubmit.args;
AddFeedbackMobile.args = ButtonStories.AddFeedbackMobileSubmit.args;

CancelDesktop.args = ButtonStories.Cancel.args;
CancelMobile.args = ButtonStories.CancelMobile.args;

DeleteDesktop.args = ButtonStories.DeleteSubmit.args;
DeleteMobile.args = ButtonStories.DeleteMobileSubmit.args;