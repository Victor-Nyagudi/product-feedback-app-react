import React from "react";

import SuggestionsHeader from "../../../../../components/pages/suggestions-page/main/SuggestionsHeader";

import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "App/Pages/Suggestions/Main/SuggestionsHeader",
    component: SuggestionsHeader,
    args: {
        totalSuggestions: 3,
        isMobileScreen: true,
        sharedProps: {
            /*
                ? Storybook doesn't let you specify argTypes for nested
                ? properties yet, so I'll just define a simple function
                ? here even though I would've liked to make it an action.

                ? https://github.com/storybookjs/storybook/issues/12078
                ? https://github.com/storybookjs/storybook/issues/16089
            */
            toggleIsEditing: () => {}
        }
    },
    argTypes: {
        getSortByCriteria: { action: "getSortByCriteria" }
    },
    includeStories: /^[A-Z]/
}

const Template = (args) => <SuggestionsHeader {...args} />;

export const Mobile = Template.bind({});
export const Desktop = Template.bind({});

Desktop.args = { isMobileScreen: false }

Mobile.args = { isMobileScreen: true }

export const interactions = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openDropdownbutton = canvas.getAllByRole("button")
        .find(button => button.classList.contains("suggestions__header-sort"));

    await userEvent.click(openDropdownbutton);

    const dropdownMenu = canvas.getAllByRole("list")
        .find(item => item.classList.contains("dropdown-menu"));

    await expect(dropdownMenu).toBeVisible();

    await userEvent.click(within(dropdownMenu).getByText("Most Comments"));

    await expect(openDropdownbutton).toHaveTextContent(/Most Comments/);
    
    await expect(dropdownMenu).not.toBeVisible();
}

Mobile.play = interactions;
Desktop.play = interactions;