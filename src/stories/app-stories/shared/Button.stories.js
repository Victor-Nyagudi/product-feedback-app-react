import React from 'react';

import Button  from "../../../components/shared/Button";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from '@storybook/jest';

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
export const AddFeedbackSubmit = Template.bind({});
export const AddFeedbackMobile = Template.bind({});
export const AddFeedbackMobileSubmit = Template.bind({});
export const AddFeedbackLink = Template.bind({});

export const EditFeedback = Template.bind({});
export const EditFeedbackLink = Template.bind({});

export const Cancel = Template.bind({});
export const CancelMobile = Template.bind({});

export const Delete = Template.bind({});
export const DeleteSubmit = Template.bind({});
export const DeleteMobile = Template.bind({});
export const DeleteMobileSubmit = Template.bind({});

AddFeedback.args = {
    text: "Add Feedback",
    className: "button--add-feedback",
}

AddFeedbackSubmit.args = {
    ...AddFeedback.args,
    type: "submit"
}

AddFeedbackLink.args = {
    ...AddFeedback.args,
    isLink: true, 
    icon: <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg" className="feedback-button-svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="14" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
}

AddFeedbackMobile.args = { 
    ...AddFeedback.args,
    className: "button--add-feedback add-edit-feedback__button" 
};

AddFeedbackMobileSubmit.args = {
    ...AddFeedbackMobile.args,
    type: "submit"
}

EditFeedback.args = {
    text: "Edit Feedback",
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

CancelMobile.args = { 
    ...Cancel.args,
    className: "button--cancel add-edit-feedback__button" 
};

Delete.args = {
    text: "Delete",
    className: "button--delete"
}

DeleteSubmit.args = {
    ...Delete.args,
    type: "submit"
}

DeleteMobile.args = {
    ...Delete.args,
    className: "button--delete add-edit-feedback__button"
}

DeleteMobileSubmit.args = {
    ...DeleteMobile.args,
    type: "submit"
}

AddFeedbackLink.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByRole("link", { name: "+Add Feedback" });

    await expect(link).toHaveAttribute("href", "/add-feedback");
}

EditFeedbackLink.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByRole("link", { name: "Edit Feedback" });

    await expect(link).toHaveAttribute("href", "/edit-feedback");
}

