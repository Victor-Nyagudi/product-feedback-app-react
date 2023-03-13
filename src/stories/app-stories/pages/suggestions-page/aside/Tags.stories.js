import React from "react";

import Tags from "../../../../../components/pages/suggestions-page/aside/Tags";

import { within,userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/Aside/Tags",
    component: Tags,
    argTypes: {
        getActiveTag: { action: "getActiveTag" }
    },
    decorators: [
        (Story) => (
            <div className="mobile-side-menu">
                <Story />
            </div>
        )
    ],
    includeStories: /^[A-Z]/
}

const Template = (args) => <Tags {...args} />

export const MobileSideMenu = Template.bind({});
export const DesktopSuggestionsAside = Template.bind({});

DesktopSuggestionsAside.decorators = [
    (Story) => (
        <aside className="suggestions__aside">
            <Story />
        </aside>
    )
]

export const clickTagInteraction = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const tagsList = canvas
        .getAllByRole("list")
        .find(list => list.classList.contains("tags"))
    
    /*
        * No special reason for using the fourth tag. 
        * Any tag except the first that's already 
        * active will do. 
    */
    const fourthTag = within(tagsList)
        .getAllByRole("listitem")[3];

    await userEvent.click(within(fourthTag).getByRole("button", { name: "Enhancement" }));

    await expect(fourthTag).toHaveClass("tag--active");
}

MobileSideMenu.play = clickTagInteraction;
DesktopSuggestionsAside.play =  clickTagInteraction;