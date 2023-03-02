import React from "react";

import GoBackHeader from "../../../components/shared/GoBackHeader";

export default {
    title: "App/Shared/GoBackHeader",
    component: GoBackHeader
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
    secButtonText: "Edit feedback",
    secButtonClassName: "button--edit-feedback",
    secButtonIcon: null
};