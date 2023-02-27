import React from "react";

import DropdownMenuItem from "../../../components/shared/DropdownMenuItem";

export default {
    title: "App/Shared/DropdownMenuItem",
    component: DropdownMenuItem,
    args: {
        buttonText: "Feature",
        isSelected: true,
        index: 0
    }
}

const Template = (args) => <DropdownMenuItem {...args} />

export const Default = Template.bind({});
