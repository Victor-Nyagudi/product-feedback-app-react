import React from "react";

import TextArea from "../../../components/shared/TextArea";

export default {
    title: "App/Shared/Textarea",
    component: TextArea,
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
        handleOnChange: { action: "handleOnChange" }
    }
}

const Template = (args) => <TextArea { ...args } />

export const Default = Template.bind({});
export const Error = Template.bind({});

Default.args = {
    id: "sample-textarea",
    name: "sample-textarea",
    placeholder: "Tell us about yourself...",
    isRequired: false,
    maxLength: 250,
    showValidationMessage: false
};

Error.args = {
    ...Default.args,
    showValidationMessage: true
};