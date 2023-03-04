import React from "react";

import DropdownMenuItem from "../../../components/shared/DropdownMenuItem";

export default {
    title: "App/Shared/DropdownMenuItem",
    component: DropdownMenuItem,
    argTypes: { 
        setActive: { action: "setActive" },
        toggleDropdownMenu: { action: "toggleDropdownMenu" } 
    },
    /*
        ? Declaring args at the component level doesn't work
        ? if the stories are being imported by other stories e.g.
        ? these stories are imported by the parent DropdownMenu's stories, 
        ? so each stories' "args" need to be explicitly set.
        ? Probably a bug, but I'll proceed with the inconvenience because 
        ? importing stories is better for maintenability in the event the 
        ? signature of DropdownMenuItem, only these stories will be changed
        ? and it will reflect everywhere they're used.
    */
    // args: {
    //     buttonText: "Feature",
    //     index: 1
    // },
}

const Template = (args) => <DropdownMenuItem {...args} />

export const UnselectedWrappedByListTag = Template.bind({});
export const SelectedWrappedByListTag = Template.bind({});

export const Unselected = Template.bind({});
export const Selected = Template.bind({});


UnselectedWrappedByListTag.decorators = [
    (Story) => (
        <ul>
            <Story />
        </ul>
    )
];

SelectedWrappedByListTag.decorators = [
    (Story) => (
        <ul>
            <Story />
        </ul>
    )
];

UnselectedWrappedByListTag.args = { isSelected: false, buttonText: "Bug" };
SelectedWrappedByListTag.args = { isSelected: true, buttonText: "Bug" };

Unselected.args = { isSelected: false, buttonText: "Feature" };
Selected.args = { isSelected: true, buttonText: "UI" };