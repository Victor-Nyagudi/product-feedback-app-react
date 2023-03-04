import React from "react";

import DropdownMenuItem from "../../../components/shared/DropdownMenuItem";

export default {
    title: "App/Shared/DropdownMenuItem",
    component: DropdownMenuItem,
    args: {
        buttonText: "Feature",
        index: 1
    },
    argTypes: { 
        setActive: { action: "setActive" },
        toggleDropdownMenu: { action: "toggleDropdownMenu" } 
    },
    decorators: [
        (Story) => (
            <ul>
                <Story />
            </ul>
        )
    ]
}

const Template = (args) => <DropdownMenuItem {...args} />

export const Unselected = Template.bind({});
export const Selected = Template.bind({});

Unselected.args = { isSelected: false }
Selected.args = { isSelected: true }