import React from "react";

import GoBackHeader from "../../../components/shared/GoBackHeader";

import { EditFeedbackLink } from "./Button.stories";

export default {
    title: "App/Shared/GoBackHeader",
    component: GoBackHeader,
    argTypes: {
        toggleEditPage: { action: "toggleEditPage" }
    }
}

const Template = (args) => <GoBackHeader {...args} />

export const NoSecondaryButton = Template.bind({});
export const HasSecondaryButton = Template.bind({});

NoSecondaryButton.args = {
    hasSecondaryButton: false,
    secButtonText: "",
    secButtonClassName: "",
    secButtonIcon: null
};

HasSecondaryButton.args = {
    hasSecondaryButton: true,
    secButtonText: "Edit Feedback",
    secButtonClassName: "button--edit-feedback",
    secButtonIcon: null
};

HasSecondaryButton.play = EditFeedbackLink.play;