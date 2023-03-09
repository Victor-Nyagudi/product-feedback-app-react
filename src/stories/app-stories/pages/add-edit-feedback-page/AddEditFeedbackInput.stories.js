import React from "react";

import AddEditFeedbackInput from "../../../../components/pages/add-edit-feedback-page/AddEditFeedbackInput";

import * as InputStories from "../../shared/Input.stories";
import * as TextAreaStories from "../../shared/Textarea.stories";

export default {
    title: "App/Pages/AddEditFeedback/AddEditFeedbackInput",
    component: AddEditFeedbackInput,
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
                { name: "dark-grey", value: "#3b3b3b" }
            ]
        }
    },
    argTypes: {
        handleChange: { action: "handleChange" },
        updateReadOnlyValue: { action: "updateReadOnlyValue" }
    }
}

const inputArgs = {
    title: "Feedback Title",
    labelText: "Add a short, descriptive headline",
    showValidationMessage: false,
    isTextArea: false 
}

const Template = (args) => <AddEditFeedbackInput {...args} />;

export const TextInput = Template.bind({});
export const TextInputError = Template.bind({});

export const TextInputCategoryDropdown = Template.bind({});
export const TextInputCategoryDropdownError = Template.bind({});

export const TextInputStatusDropdown = Template.bind({});
export const TextInputStatusDropdownError = Template.bind({});

export const TextAreaInput = Template.bind({});
export const TextAreaInputError = Template.bind({});

TextInput.args = {
    ...InputStories.Default.args,
    ...inputArgs
}

TextInputError.args = {
    ...TextInput.args,
    showValidationMessage: true
}

TextInputCategoryDropdown.args = {
    ...InputStories.HasCategoryDropdown.args,
    ...inputArgs,
    title: "Category",
    labelText: "Choose a category for your feedback"
}

TextInputCategoryDropdownError.args = {
    ...TextInputCategoryDropdown.args,
    showValidationMessage: true
}

TextInputStatusDropdown.args = {
    ...InputStories.HasStatusDropdown.args,
    ...inputArgs,
    title: "Update Status",
    labelText: "Change feedback state"
}

TextInputStatusDropdownError.args = {
    ...TextInputStatusDropdown.args,
    showValidationMessage: true
}

TextAreaInput.args = {
    ...TextAreaStories.Default.args,
    title: "Feedback Detail",
    labelText: "Include any specific comments on what should be improved, added, etc.",
    showValidationMessage: false,
    isTextArea: true 
}

TextAreaInputError.args = {
    ...TextAreaInput.args,
    showValidationMessage: true
}

TextInputCategoryDropdown.play = InputStories.HasCategoryDropdown.play;
TextInputStatusDropdown.play = InputStories.HasStatusDropdown.play;