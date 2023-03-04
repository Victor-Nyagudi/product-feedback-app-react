import React from 'react';

import Button  from "../../../components/shared/Button";

export default {
    title: "App/Shared/Button",
    component: Button,
    args: {
        isLink: false,
        type: "button"        
    },
    argTypes: {
        toggleEditPage: { action: "toggleEditPage" }
    }     
}

const Template = (args) => <Button {...args} />

export const AddFeedback = Template.bind({});
export const AddFeedbackLink = Template.bind({});

export const EditFeedback = Template.bind({});
export const EditFeedbackLink = Template.bind({});

export const Cancel = Template.bind({});
export const Delete = Template.bind({});

AddFeedback.args = {
    text: "Add feedback",
    className: "button--add-feedback",
}

AddFeedbackLink.args = {
    ...AddFeedback.args,
    isLink: true, 
    icon: <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg" className="feedback-button-svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="14" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
}

EditFeedback.args = {
    text: "Edit feedback",
    className: "button--edit-feedback"
}

EditFeedbackLink.args = {
    ...EditFeedback.args,
    isLink: true
}

Cancel.args = {
    text: "Cancel",
    className: "button--cancel"
}

Delete.args = {
    text: "Delete",
    className: "button--delete"
}