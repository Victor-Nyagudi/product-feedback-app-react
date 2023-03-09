import React from "react";

import DropdownMenuItem from "../../../components/shared/DropdownMenuItem";

export default {
    title: "App/Shared/DropdownMenuItem",
    component: DropdownMenuItem,
    argTypes: { 
        setActive: { action: "setActive" },
        toggleDropdownMenu: { action: "toggleDropdownMenu" } 
    },
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: "listitem",
                        selector: "dropdown-menu__item"
                    }
                ]
            }
        }
    }
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

export const UnselectedFeature = Template.bind({});
export const UnselectedBug = Template.bind({});
export const UnselectedUX = Template.bind({});

export const SelectedUI = Template.bind({});


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

/*
    ? These two stories are imported into other stories, therefore, are 
    ? not wrapped in with "ul" because this interferes with styling, hence
    ? the existence of the stories above to see how each item will look in a
    ? more "natural" state i.e. inside a list. Also removes accessibility warning
    ? in Storybook.  
*/
UnselectedFeature.args = { isSelected: false, buttonText: "Feature" };
UnselectedBug.args = { isSelected: false, buttonText: "Bug" };
UnselectedUX.args = { isSelected: false, buttonText: "UX" };

SelectedUI.args = { isSelected: true, buttonText: "UI" };